import React from "react"

function ProjectBox() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-[14px] border border-[#111] p-5 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.07),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
      <div className="h-[300px] w-full rounded-2xl bg-accent"></div>
      <div className="flex w-full flex-col gap-2">
        <p className="text-base">Kish</p>
        <p className="text-[12px] text-white/40">Front-end Devloper</p>
      </div>
    </div>
  )
}

export default ProjectBox
