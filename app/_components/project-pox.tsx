import Image from "next/image"
import Link from "next/link"
import React from "react"
export type ProjectType = {
  name: string
  href?: string
  role: string
  src: string
}

function ProjectBox({
  project: { src, name, href, role },
}: {
  project: ProjectType
}) {
  const content = (
    <div className="flex w-full flex-col gap-4 rounded-[14px] border border-[#111] bg-[#111] p-3 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.07),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
      <Image
        src={src}
        className="w-full overflow-hidden rounded-xl"
        alt={name}
        width={200}
        height={150}
      />
      <div className="flex w-full flex-col gap-2">
        <p className="text-base capitalize">{name}</p>
        <p className="text-[12px] text-white/40">{role}</p>
      </div>
    </div>
  )

  return href ? (
    <Link href={href} target="__blank" className="w-full">
      {content}
    </Link>
  ) : (
    content
  )
}

export default ProjectBox
