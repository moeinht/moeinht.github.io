import React from "react"
import ProjectBox, { ProjectType } from "./project-pox"
import { Card } from "@/components/ui/card"

function ProjectsSection({ children }: { children?: React.ReactNode }) {
  const projects: ProjectType[] = [
    {
      name: "kish staffs",
      src: "/kish.webp",
      role: "Frontend Developer",
    },
    {
      name: "kish warehouse keeper",
      src: "/kepp.webp",
      role: "Frontend Developer",
    },
    {
      name: "kish employs",
      src: "/emp.webp",
      role: "Frontend Developer",
    },
    {
      name: "club",
      src: "/club.webp",
      href: "/club",
      role: "Frontend Developer",
    },
    {
      name: "balynor",
      src: "/balynor.webp",
      href: "/balynor",
      role: "Frontend Developer",
    },
    { name: "tan", src: "/tan.webp", href: "/tan", role: "Frontend Developer" },
    { name: "far", src: "/far.webp", href: "/far", role: "Frontend Developer" },
    {
      name: "form",
      src: "/form.webp",
      href: "/form",
      role: "ui/ux implementation",
    },
  ]

  return (
    <>
      <Card className="hidden w-full xl:flex">
        {children ? (
          children
        ) : (
          <div className="flex flex-col items-start justify-between gap-2 xl:flex-row">
            <p className="text-[22px]">Works & Projects</p>
            <p className="text-sm text-white/40">
              Check out some of my design projects, meticulously crafted with
              love and dedication .
            </p>
          </div>
        )}
        <div className="grid w-full grid-cols-3 gap-4">
          {projects.map((item) => (
            <ProjectBox
              key={item.href ? item.href : Math.random()}
              project={item}
            />
          ))}
        </div>
        {/* <div className="flex items-center justify-between">
            <p className="text-sm text-white/40">
              Interested in Exploring More?
            </p>
            <Button
              variant={"outline"}
              className="rounded-full px-4 py-4 text-sm"
              size={"sm"}
            >
              <p>View All</p>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 18 18"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div> */}
      </Card>{" "}
      <div className="flex w-full flex-col gap-4 xl:!hidden">
        {children ? (
          children
        ) : (
          <div className="flex flex-col items-start justify-between gap-2 xl:flex-row">
            <p className="text-[22px]">Works & Projects</p>
            <p className="text-sm text-white/40">
              Check out some of my design projects, meticulously crafted with
              love and dedication .
            </p>
          </div>
        )}
        <div className="grid w-full grid-cols-1 gap-4">
          {projects.map((item) => (
            <ProjectBox
              key={item.href ? item.href : Math.random()}
              project={item}
            />
          ))}
        </div>
        {/* <div className="flex items-center justify-between">
            <p className="text-sm text-white/40">
              Interested in Exploring More?
            </p>
            <Button
              variant={"outline"}
              className="rounded-full px-4 py-4 text-sm"
              size={"sm"}
            >
              <p>View All</p>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 18 18"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </div> */}
      </div>
    </>
  )
}

export default ProjectsSection
