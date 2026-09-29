"use client"

import { useEffect, useRef } from "react"
import { createEarth } from "./earth-model"

export default function Earth() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let cleanup: (() => void) | undefined
    let cancelled = false

    const element = ref.current

    if (!element) {
      return
    }

    const tokyoCard = document.createElement("div")

    tokyoCard.innerHTML = `
      <div style="
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 4px;
      ">
        Tokyo
      </div>

      <div style="
        font-size: 12px;
        opacity: 0.7;
      ">
        Japan
      </div>
    `

    tokyoCard.style.background = "#ffffff"
    tokyoCard.style.color = "#111827"
    tokyoCard.style.padding = "12px 16px"
    tokyoCard.style.borderRadius = "12px"
    tokyoCard.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)"

    const newYorkCard = document.createElement("div")

    newYorkCard.innerHTML = `
      <div style="
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 4px;
      ">
        New York
      </div>

      <div style="
        font-size: 12px;
        opacity: 0.7;
      ">
        United States
      </div>
    `

    newYorkCard.style.background = "#ffffff"
    newYorkCard.style.color = "#111827"
    newYorkCard.style.padding = "12px 16px"
    newYorkCard.style.borderRadius = "12px"
    newYorkCard.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.15)"

    createEarth(element, {
      markers: [
        {
          lat: 35.6762,
          lng: 139.6503,
          title: "Tokyo",
          description: "Japan",
          element: tokyoCard,
        },
        {
          lat: 40.7128,
          lng: -74.006,
          title: "New York",
          description: "United States",
          element: newYorkCard,
        },
      ],
    }).then((dispose) => {
      if (cancelled) {
        dispose?.()
        return
      }

      cleanup = dispose
    })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "400px",
      }}
    />
  )
}
