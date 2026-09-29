import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

// https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson
const LAND_URL = "/data/land-data.json"

type Position = [lng: number, lat: number]

interface PolygonGeometry {
  type: "Polygon"
  coordinates: Position[][]
}

interface MultiPolygonGeometry {
  type: "MultiPolygon"
  coordinates: Position[][][]
}

interface LandFeature {
  type: "Feature"
  geometry: PolygonGeometry | MultiPolygonGeometry
}

interface LandGeoJSON {
  type: "FeatureCollection"
  features: LandFeature[]
}

export interface EarthMarker {
  lat: number
  lng: number
  title: string
  description?: string

  /**
   * Optional custom DOM element.
   *
   * The Earth instance will position this element
   * above the marker when it is hovered.
   */
  element?: HTMLElement
}

export interface EarthOptions {
  radius?: number
  dotSpacing?: number
  dotSize?: number
  oceanDotSize?: number

  dotColor?: THREE.ColorRepresentation
  oceanDotColor?: THREE.ColorRepresentation

  /**
   * Use null for transparent background.
   */
  background?: THREE.ColorRepresentation | null

  autoRotateSpeed?: number

  /**
   * Interactive markers.
   */
  markers?: EarthMarker[]
}

interface EarthPoints {
  land: THREE.Vector3[]
  ocean: THREE.Vector3[]
}

/* -------------------------------------------------------------------------- */
/* Geographic helpers                                                         */
/* -------------------------------------------------------------------------- */

function normalizeLongitude(lng: number): number {
  return ((((lng + 180) % 360) + 360) % 360) - 180
}

function pointInRing(lng: number, lat: number, ring: Position[]): boolean {
  let inside = false

  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i]
    const [xj, yj] = ring[j]

    const intersects =
      yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi

    if (intersects) {
      inside = !inside
    }
  }

  return inside
}

function pointInPolygon(
  lng: number,
  lat: number,
  rings: Position[][]
): boolean {
  if (rings.length === 0) {
    return false
  }

  // Outer ring
  if (!pointInRing(lng, lat, rings[0])) {
    return false
  }

  // Holes
  for (let i = 1; i < rings.length; i++) {
    if (pointInRing(lng, lat, rings[i])) {
      return false
    }
  }

  return true
}

function isLand(lng: number, lat: number, geojson: LandGeoJSON): boolean {
  const normalizedLng = normalizeLongitude(lng)

  for (const feature of geojson.features) {
    const { geometry } = feature

    if (geometry.type === "Polygon") {
      if (pointInPolygon(normalizedLng, lat, geometry.coordinates)) {
        return true
      }

      continue
    }

    for (const polygon of geometry.coordinates) {
      if (pointInPolygon(normalizedLng, lat, polygon)) {
        return true
      }
    }
  }

  return false
}

/* -------------------------------------------------------------------------- */
/* Lat/Lng -> Three.js                                                        */
/* -------------------------------------------------------------------------- */

function latLngToVector3(
  lat: number,
  lng: number,
  radius: number
): THREE.Vector3 {
  const phi = THREE.MathUtils.degToRad(90 - lat)
  const theta = THREE.MathUtils.degToRad(lng + 180)

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

/* -------------------------------------------------------------------------- */
/* Find nearest land dot                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Finds the closest existing land dot to the requested geographic position.
 *
 * Important:
 * This runs only once when markers are created.
 * It does NOT run inside the animation loop.
 *
 * Therefore keeping dotSpacing at 1.4 remains cheap.
 */
function findNearestLandPoint(
  markerPosition: THREE.Vector3,
  landPoints: THREE.Vector3[]
): THREE.Vector3 | null {
  if (landPoints.length === 0) {
    return null
  }

  let nearest: THREE.Vector3 | null = null
  let nearestDistanceSquared = Infinity

  for (let i = 0; i < landPoints.length; i++) {
    const point = landPoints[i]

    const distanceSquared = markerPosition.distanceToSquared(point)

    if (distanceSquared < nearestDistanceSquared) {
      nearestDistanceSquared = distanceSquared
      nearest = point
    }
  }

  return nearest
}

/* -------------------------------------------------------------------------- */
/* Earth dots                                                                  */
/* -------------------------------------------------------------------------- */

function generateEarthPoints(
  geojson: LandGeoJSON,
  radius: number,
  spacing: number
): EarthPoints {
  const land: THREE.Vector3[] = []
  const ocean: THREE.Vector3[] = []

  const oceanSpacing = spacing * 1.15

  for (let lat = -90; lat <= 90; lat += spacing) {
    const latitudeRadians = THREE.MathUtils.degToRad(lat)

    const cosLatitude = Math.abs(Math.cos(latitudeRadians))

    const longitudeStep = Math.max(
      oceanSpacing / Math.max(cosLatitude, 0.25),
      1
    )

    for (let lng = -180; lng < 180; lng += longitudeStep) {
      const landPoint = isLand(lng, lat, geojson)

      const point = latLngToVector3(lat, lng, radius)

      if (landPoint) {
        point.multiplyScalar((radius + 0.012) / radius)

        land.push(point)
      } else {
        point.multiplyScalar((radius + 0.006) / radius)

        ocean.push(point)
      }
    }
  }

  return {
    land,
    ocean,
  }
}

function createDotCloud(
  positions: THREE.Vector3[],
  size: number,
  color: THREE.ColorRepresentation,
  opacity = 1
): THREE.InstancedMesh {
  const geometry = new THREE.SphereGeometry(size, 4, 4)

  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
  })

  const mesh = new THREE.InstancedMesh(geometry, material, positions.length)

  const matrix = new THREE.Matrix4()

  for (let i = 0; i < positions.length; i++) {
    const position = positions[i]

    matrix.makeTranslation(position.x, position.y, position.z)

    mesh.setMatrixAt(i, matrix)
  }

  mesh.instanceMatrix.needsUpdate = true

  return mesh
}

/* -------------------------------------------------------------------------- */
/* Ocean                                                                       */
/* -------------------------------------------------------------------------- */

function createOcean(radius: number): THREE.Mesh {
  const geometry = new THREE.SphereGeometry(radius, 64, 64)

  const material = new THREE.MeshBasicMaterial({
    color: "#f1f5f9",
  })

  return new THREE.Mesh(geometry, material)
}

/* -------------------------------------------------------------------------- */
/* Atmosphere                                                                  */
/* -------------------------------------------------------------------------- */

function createAtmosphere(radius: number): THREE.Mesh {
  const geometry = new THREE.SphereGeometry(radius * 1.025, 64, 64)

  const material = new THREE.MeshBasicMaterial({
    color: "#ffffff",
    transparent: true,
    opacity: 0.025,
    side: THREE.BackSide,
    depthWrite: false,
  })

  return new THREE.Mesh(geometry, material)
}

/* -------------------------------------------------------------------------- */
/* Markers                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Creates a marker.
 *
 * `landPoints` is optional because the marker can still work without
 * land snapping.
 */
function createMarkerMesh(
  marker: EarthMarker,
  radius: number,
  landPoints: THREE.Vector3[],
  shouldSnapToLand: boolean
): THREE.Mesh {
  const geometry = new THREE.SphereGeometry(0.015, 8, 8)

  const material = new THREE.MeshBasicMaterial({
    color: "#8285F4",
  })

  const mesh = new THREE.Mesh(geometry, material)

  /*
   * First calculate the exact geographic position.
   */
  const geographicPosition = latLngToVector3(
    marker.lat,
    marker.lng,
    radius + 0.012
  )

  let finalPosition = geographicPosition

  /*
   * If the marker coordinates are on land, snap it to the nearest
   * land dot that already exists.
   *
   * This does NOT create additional dots.
   */
  if (shouldSnapToLand && landPoints.length > 0) {
    const nearestLandPoint = findNearestLandPoint(
      geographicPosition,
      landPoints
    )

    if (nearestLandPoint) {
      finalPosition = nearestLandPoint
    }
  }

  mesh.position.copy(finalPosition)

  mesh.userData.marker = marker

  return mesh
}

/* -------------------------------------------------------------------------- */
/* Marker overlay                                                              */
/* -------------------------------------------------------------------------- */

function createDefaultMarkerElement(marker: EarthMarker): HTMLDivElement {
  const element = document.createElement("div")

  element.style.padding = "12px 14px"
  element.style.borderRadius = "10px"
  element.style.background = "rgba(15, 23, 42, 0.95)"
  element.style.color = "#ffffff"
  element.style.fontFamily =
    "system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
  element.style.fontSize = "13px"
  element.style.lineHeight = "1.4"
  element.style.whiteSpace = "nowrap"
  element.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.25)"

  const title = document.createElement("div")

  title.textContent = marker.title

  title.style.fontWeight = "600"
  title.style.marginBottom = marker.description ? "3px" : "0"

  element.appendChild(title)

  if (marker.description) {
    const description = document.createElement("div")

    description.textContent = marker.description

    description.style.opacity = "0.7"
    description.style.fontSize = "12px"

    element.appendChild(description)
  }

  return element
}

function setupMarkerElement(element: HTMLElement): void {
  element.style.position = "fixed"
  element.style.left = "0"
  element.style.top = "0"
  element.style.display = "none"
  element.style.pointerEvents = "none"
  element.style.transform = "translate(-50%, calc(-100% - 14px))"
  element.style.zIndex = "9999"
}

/* -------------------------------------------------------------------------- */
/* Disposal                                                                    */
/* -------------------------------------------------------------------------- */

function disposeMaterial(material: THREE.Material | THREE.Material[]): void {
  if (Array.isArray(material)) {
    for (const item of material) {
      item.dispose()
    }

    return
  }

  material.dispose()
}

function disposeObject(object: THREE.Object3D): void {
  object.traverse((child) => {
    if (!(
      child instanceof THREE.Mesh || child instanceof THREE.InstancedMesh
    )) {
      return
    }

    child.geometry.dispose()
    disposeMaterial(child.material)
  })
}

function cleanupRenderer(renderer: THREE.WebGLRenderer): void {
  renderer.dispose()
  renderer.domElement.remove()
}

/* -------------------------------------------------------------------------- */
/* Create Earth                                                                */
/* -------------------------------------------------------------------------- */

export async function createEarth(
  container: HTMLElement,
  options: EarthOptions = {}
): Promise<() => void> {
  const {
    radius = 1.2,
    dotSpacing = 1.4,
    dotSize = 0.01,
    oceanDotSize = 0.006,
    dotColor = "#cbd5e1",
    oceanDotColor = "#f1f5f9",
    background = null,
    autoRotateSpeed = 0.09,
    markers = [],
  } = options

  /* ------------------------------------------------------------------------ */
  /* Scene                                                                     */
  /* ------------------------------------------------------------------------ */

  const scene = new THREE.Scene()

  if (background !== null) {
    scene.background = new THREE.Color(background)
  } else {
    scene.background = null
  }

  /* ------------------------------------------------------------------------ */
  /* Camera                                                                    */
  /* ------------------------------------------------------------------------ */

  const width = container.clientWidth || 1
  const height = container.clientHeight || 1

  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100)

  camera.position.set(0, 0, radius * 3.4)

  /* ------------------------------------------------------------------------ */
  /* Renderer                                                                  */
  /* ------------------------------------------------------------------------ */

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  })

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  renderer.setSize(width, height)

  renderer.outputColorSpace = THREE.SRGBColorSpace

  renderer.domElement.style.width = "100%"
  renderer.domElement.style.height = "100%"
  renderer.domElement.style.display = "block"

  container.appendChild(renderer.domElement)

  /* ------------------------------------------------------------------------ */
  /* Controls                                                                  */
  /* ------------------------------------------------------------------------ */

  const controls = new OrbitControls(camera, renderer.domElement)

  controls.enableRotate = true
  controls.enableZoom = false
  controls.enablePan = false

  controls.enableDamping = true
  controls.dampingFactor = 0.05

  controls.minPolarAngle = 0.35
  controls.maxPolarAngle = Math.PI - 0.35

  /* ------------------------------------------------------------------------ */
  /* Earth group                                                               */
  /* ------------------------------------------------------------------------ */

  const earth = new THREE.Group()

  scene.add(earth)

  earth.rotation.x = 0.22
  earth.rotation.y = THREE.MathUtils.degToRad(150)

  /* ------------------------------------------------------------------------ */
  /* Ocean                                                                     */
  /* ------------------------------------------------------------------------ */

  const ocean = createOcean(radius)

  earth.add(ocean)

  /* ------------------------------------------------------------------------ */
  /* Land data                                                                 */
  /* ------------------------------------------------------------------------ */

  let geojson: LandGeoJSON

  try {
    const response = await fetch(LAND_URL)

    if (!response.ok) {
      throw new Error(`Failed to fetch land data: ${response.status}`)
    }

    geojson = (await response.json()) as LandGeoJSON
  } catch (error) {
    controls.dispose()
    disposeObject(earth)
    cleanupRenderer(renderer)

    throw error
  }

  /* ------------------------------------------------------------------------ */
  /* Dots                                                                      */
  /* ------------------------------------------------------------------------ */

  const points = generateEarthPoints(geojson, radius, dotSpacing)

  const landDots = createDotCloud(points.land, dotSize, dotColor)

  const oceanDots = createDotCloud(points.ocean, oceanDotSize, oceanDotColor)

  earth.add(landDots)
  earth.add(oceanDots)

  /* ------------------------------------------------------------------------ */
  /* Atmosphere                                                                */
  /* ------------------------------------------------------------------------ */

  const atmosphere = createAtmosphere(radius)

  earth.add(atmosphere)

  /* ------------------------------------------------------------------------ */
  /* Markers                                                                   */
  /* ------------------------------------------------------------------------ */

  const markerGroup = new THREE.Group()

  earth.add(markerGroup)

  const markerMeshes: THREE.Mesh[] = []

  const markerElements = new Map<THREE.Mesh, HTMLElement>()

  const ownedElements = new Set<HTMLElement>()

  for (const marker of markers) {
    /*
     * Only snap markers that are actually located on land.
     *
     * This prevents a marker in the ocean from jumping to
     * the nearest continent.
     */
    const markerIsLand = isLand(marker.lng, marker.lat, geojson)

    const mesh = createMarkerMesh(marker, radius, points.land, markerIsLand)

    markerGroup.add(mesh)

    markerMeshes.push(mesh)

    const element = marker.element ?? createDefaultMarkerElement(marker)

    setupMarkerElement(element)

    document.body.appendChild(element)

    markerElements.set(mesh, element)

    if (!marker.element) {
      ownedElements.add(element)
    }
  }

  /* ------------------------------------------------------------------------ */
  /* Raycaster                                                                 */
  /* ------------------------------------------------------------------------ */

  const raycaster = new THREE.Raycaster()

  const mouse = new THREE.Vector2(-10, -10)

  let hoveredMarker: THREE.Mesh | null = null

  let isHoveringMarker = false
  let isDragging = false

  /* ------------------------------------------------------------------------ */
  /* Marker hover                                                               */
  /* ------------------------------------------------------------------------ */

  const hideMarkerElement = (marker: THREE.Mesh): void => {
    const element = markerElements.get(marker)

    if (!element) {
      return
    }

    element.style.display = "none"
  }

  const showMarkerElement = (marker: THREE.Mesh): void => {
    const element = markerElements.get(marker)

    if (!element) {
      return
    }

    element.style.display = "block"
  }

  const clearMarkerHover = (): void => {
    if (!hoveredMarker) {
      return
    }

    hoveredMarker.scale.setScalar(1)

    const material = hoveredMarker.material

    if (material instanceof THREE.MeshBasicMaterial) {
      material.color.set("#0800f5")
    }

    hideMarkerElement(hoveredMarker)

    hoveredMarker = null
    isHoveringMarker = false
  }

  const showMarkerHover = (marker: THREE.Mesh): void => {
    if (hoveredMarker === marker) {
      return
    }

    clearMarkerHover()

    const material = marker.material

    if (material instanceof THREE.MeshBasicMaterial) {
      material.color.set("#38bdf8")
    }

    marker.scale.setScalar(1.8)

    hoveredMarker = marker
    isHoveringMarker = true

    showMarkerElement(marker)
  }

  /* ------------------------------------------------------------------------ */
  /* Marker visibility                                                         */
  /* ------------------------------------------------------------------------ */

  const getHoveredMarker = (): THREE.Mesh | null => {
    if (markerMeshes.length === 0) {
      return null
    }

    raycaster.setFromCamera(mouse, camera)

    const markerHits = raycaster.intersectObjects(markerMeshes, false)

    if (markerHits.length === 0) {
      return null
    }

    const markerHit = markerHits[0]

    const marker = markerHit.object as THREE.Mesh

    /*
     * Check if the globe itself is between
     * the camera and the marker.
     */
    const oceanHits = raycaster.intersectObject(ocean, false)

    if (oceanHits.length > 0) {
      const oceanDistance = oceanHits[0].distance
      const markerDistance = markerHit.distance

      if (oceanDistance < markerDistance - 0.001) {
        return null
      }
    }

    return marker
  }

  const updateMarkerHover = (): void => {
    if (isDragging) {
      return
    }

    const marker = getHoveredMarker()

    if (!marker) {
      clearMarkerHover()
      return
    }

    showMarkerHover(marker)
  }

  /* ------------------------------------------------------------------------ */
  /* Marker position                                                           */
  /* ------------------------------------------------------------------------ */

  const updateMarkerElementPosition = (): void => {
    if (!hoveredMarker) {
      return
    }

    const element = markerElements.get(hoveredMarker)

    if (!element) {
      return
    }

    const worldPosition = new THREE.Vector3()

    hoveredMarker.getWorldPosition(worldPosition)

    const projected = worldPosition.clone().project(camera)

    const rect = renderer.domElement.getBoundingClientRect()

    const x = rect.left + (projected.x + 1) * 0.5 * rect.width

    const y = rect.top + (1 - projected.y) * 0.5 * rect.height

    element.style.left = `${x}px`
    element.style.top = `${y}px`
    element.style.display = "block"
  }

  /* ------------------------------------------------------------------------ */
  /* Pointer events                                                            */
  /* ------------------------------------------------------------------------ */

  const updateMousePosition = (event: PointerEvent): void => {
    const rect = renderer.domElement.getBoundingClientRect()

    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1

    mouse.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
  }

  const handlePointerMove = (event: PointerEvent): void => {
    updateMousePosition(event)
    updateMarkerHover()
  }

  const handlePointerLeave = (): void => {
    mouse.set(-10, -10)

    if (!isDragging) {
      clearMarkerHover()
    }
  }

  renderer.domElement.addEventListener("pointermove", handlePointerMove)

  renderer.domElement.addEventListener("pointerleave", handlePointerLeave)

  /* ------------------------------------------------------------------------ */
  /* Drag state                                                                */
  /* ------------------------------------------------------------------------ */

  controls.addEventListener("start", () => {
    isDragging = true
    clearMarkerHover()
  })

  controls.addEventListener("end", () => {
    isDragging = false
    updateMarkerHover()
  })

  /* ------------------------------------------------------------------------ */
  /* Resize                                                                    */
  /* ------------------------------------------------------------------------ */

  const resizeObserver = new ResizeObserver(() => {
    const nextWidth = container.clientWidth || 1

    const nextHeight = container.clientHeight || 1

    camera.aspect = nextWidth / nextHeight

    camera.updateProjectionMatrix()

    renderer.setSize(nextWidth, nextHeight)

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  resizeObserver.observe(container)

  /* ------------------------------------------------------------------------ */
  /* Animation                                                                 */
  /* ------------------------------------------------------------------------ */

  let running = true
  let animationId = 0

  const clock = new THREE.Clock()

  const animate = (): void => {
    if (!running) {
      return
    }

    animationId = requestAnimationFrame(animate)

    const delta = clock.getDelta()

    if (!isDragging && !isHoveringMarker && autoRotateSpeed !== 0) {
      earth.rotation.y += autoRotateSpeed * delta
    }

    controls.update()

    /*
     * Hover detection remains synchronized
     * with the rotating Earth.
     */
    if (!isDragging && markerMeshes.length > 0) {
      updateMarkerHover()
    }

    updateMarkerElementPosition()

    renderer.render(scene, camera)
  }

  animate()

  /* ------------------------------------------------------------------------ */
  /* Cleanup                                                                   */
  /* ------------------------------------------------------------------------ */

  return () => {
    running = false

    cancelAnimationFrame(animationId)

    resizeObserver.disconnect()

    renderer.domElement.removeEventListener("pointermove", handlePointerMove)

    renderer.domElement.removeEventListener("pointerleave", handlePointerLeave)

    clearMarkerHover()

    /*
     * Remove all marker elements from DOM.
     */
    for (const element of markerElements.values()) {
      element.remove()
    }

    markerElements.clear()
    ownedElements.clear()

    controls.dispose()

    disposeObject(earth)

    cleanupRenderer(renderer)

    scene.clear()
  }
}
