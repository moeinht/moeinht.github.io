import Image from "next/image"
import { Marquee } from "./ui/marquee"

function InfiniteMarquee() {
  const skills = [
    "/css.webp",
    "/golang.webp",
    "/html.webp",
    "/jest.webp",
    "/js.webp",
    "/next.webp",
    "/node.webp",
    "/react.webp",
    "/redux.webp",
    "/tailwind.webp",
    "/ts.webp",
    "/git-icon.webp",
    "/csharp.webp",
    "/asp-net-core.webp",
  ]

  return (
    <Marquee>
      {skills.map((img, i) => (
        <div
          key={i}
          className="flex size-20 items-center justify-center rounded-xl bg-popover p-4"
        >
          <Image
            width={36}
            height={36}
            src={img}
            alt={img}
            className="h-full w-full object-contain"
          />
        </div>
      ))}
    </Marquee>
  )
}

export default InfiniteMarquee
