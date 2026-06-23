import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import ProjectsSection from "../_components/projects-section"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Resume | Moein Hoseini",
}
function ResumePage() {
  return (
    <div className="relative flex w-full flex-col items-center justify-start gap-4">
      <Card className="flex w-full flex-col xl:flex-row">
        <div className="flex h-[179px] w-full items-center justify-center overflow-hidden rounded-[18px] xl:h-[180] xl:w-[180]">
          <Image
            alt="Profile"
            width={180}
            height={160}
            src={"/lsUU6.jpg"}
            className="aspect- w-full overflow-hidden rounded-[18px] xl:aspect-square"
          />
        </div>
        <div className="flex w-full flex-col gap-[10px]">
          <p className="text-[22px] font-medium">About Me</p>
          <p className="text-base leading-[30px] text-white/70">
            I'm a{" "}
            <span className="text-[17px] !font-bold text-white">
              Front-end Developer
            </span>{" "}
            with{" "}
            <span className="text-[17px] !font-bold text-white">
              3 years of experience
            </span>{" "}
            building production web applications using{" "}
            <span className="text-[17px] !font-bold text-white">React</span> ,
            <span className="text-[17px] !font-bold text-white">Next.js</span> ,
            and{" "}
            <span className="text-[17px] !font-bold text-white">
              TypeScript
            </span>{" "}
            . I specialize in building{" "}
            <span className="text-[17px] !font-bold text-white">fast</span> ,
            <span className="text-[17px] !font-bold text-white">scalable</span>{" "}
            , and{" "}
            <span className="text-[17px] !font-bold text-white">
              maintainable UI systems
            </span>{" "}
            with a strong focus on{" "}
            <span className="text-[17px] !font-bold text-white">
              clean architecture
            </span>{" "}
            and{" "}
            <span className="text-[17px] !font-bold text-white">
              reusable components
            </span>
            . I actively improve{" "}
            <span className="text-[17px] !font-bold text-white">
              performance
            </span>{" "}
            ,
            <span className="text-[17px] !font-bold text-white">
              rendering efficiency
            </span>{" "}
            , and{" "}
            <span className="text-[17px] !font-bold text-white">
              user experience
            </span>{" "}
            through modern front-end practices, optimized data flow, and
            component-driven design.
          </p>
        </div>
      </Card>
      <Card className="h-full w-full">
        <div className="flex w-full items-center justify-start">
          <div className="flex h-fit items-center gap-2">
            <p className="left-auto mb-1.25 text-[22px]">Work Experience</p>
            <Badge variant={"outline"}>+3 Years</Badge>
          </div>
        </div>
        <div className="relative flex h-full w-full items-start pl-4">
          <div className="absolute top-2 left-0 h-full min-h-full w-px rounded-full bg-gradient-to-b from-white/20 to-transparent"></div>
          <div className="flex h-full w-full flex-col justify-between gap-6 xl:gap-[56px]">
            <div className="relative flex w-full flex-col gap-3">
              <div className="absolute top-2 -left-5 size-[10px] rounded-full bg-success"></div>
              <div className="flex w-full flex-col gap-1 xl:flex-row xl:items-center xl:justify-between xl:gap-3">
                <div className="flex flex-col gap-1 xl:flex-row xl:items-center xl:gap-3">
                  <p className="text-[22px] text-white underline">
                    <Link
                      href={
                        "https://www.linkedin.com/company/kish-ports-airports-management-and-development-company/"
                      }
                      target="__blank"
                    >
                      KishPort (Goverment Ports)
                    </Link>{" "}
                  </p>
                  <p className="mt-[2px] text-[14px] text-white">
                    Mid-level Front-End Developer
                  </p>
                </div>
                <p className="text-[14px] text-white/70">Dec 2024 - Present</p>
              </div>
              <ul className="list-disc pl-3 text-base text-white/70">
                <li>
                  eveloped responsive web applications optimi zed for desktop,
                  tablet, and mobile, focusing on top-tier UX principles to
                  ensure seamless user experiences .
                </li>
                <li>
                  Designed scalable and maintainable application structures,
                  implementing reusable components to accelerate page
                  development and streamline updates.
                </li>
                <li>
                  Built complex forms for processing goods, incorporating
                  internal chat systems for efficient team communication and
                  collaboration.
                </li>
                <li>
                  Implemented role-based access control in the desktop version,
                  managing user permissions for specific actions and routes to
                  ensure secure and organized workflows.
                </li>
              </ul>
            </div>{" "}
            <div className="relative flex w-full flex-col gap-3">
              <div className="absolute top-2 -left-5 size-[10px] rounded-full bg-white/70"></div>
              <div className="flex w-full flex-col gap-1 xl:flex-row xl:items-center xl:justify-between xl:gap-3">
                <div className="flex flex-col gap-1 xl:flex-row xl:items-center xl:gap-3">
                  <p className="text-[22px] text-white underline">
                    <Link href={"https://balynor.ir/"} target="__blank">
                      Balynor
                    </Link>{" "}
                  </p>
                  <p className="mt-[2px] text-[14px] text-white">
                    Front-End Devloper
                  </p>
                </div>
                <p className="text-[14px] text-white/70">
                  September 2023 . October 2024 - 1 year, 1 mos
                </p>
              </div>
              <ul className="list-disc pl-3 text-base text-white/70">
                <li>
                  eveloped a complex, multi-section dashboard layout for desktop
                  and mobile, featuring a 4-part slicing structure for better
                  usability and clear content organization.
                </li>
                <li>
                  Implemented role-based access control with a secure sign-up
                  flow, managing permissions for different user types
                  efficiently
                </li>
                <li>
                  Optimized platform performance with pre-fetching strategies to
                  ensure fast loading and smooth interactions.
                </li>{" "}
                <li>
                  Optimized tasks run time and multi threading operations with
                  Service Workers.
                </li>
                <li>
                  Built a music streaming platform, enabling real-time music
                  playback for listeners while supporting dynamic content and
                  interactions for artists and influencers.
                </li>
              </ul>
            </div>{" "}
            <div className="relative flex w-full flex-col gap-3">
              <div className="absolute top-2 -left-5 size-[10px] rounded-full bg-white/70"></div>
              <div className="flex w-full flex-col gap-1 xl:flex-row xl:items-center xl:justify-between xl:gap-3">
                <div className="flex flex-col gap-1 xl:flex-row xl:items-center xl:gap-3">
                  <p className="text-[22px] text-white underline">
                    <Link href={"https://ezhoosh.com/fa"} target="__blank">
                      Ezhoosh
                    </Link>{" "}
                  </p>
                  <p className="mt-[2px] text-[14px] text-white">
                    Front-End Devloper
                  </p>
                </div>
                <p className="text-[14px] text-white/70">
                  April 2023 . September 2023 - 6 mos
                </p>
              </div>
              <ul className="list-disc pl-3 text-base text-white/70">
                <li>
                  developed a complex, multi-section dashboard layout for
                  desktop and mobile, featuring a 4-part slicing structure for
                  better usability and clear content organization.
                </li>
                <li>
                  Optimized state management and rendering performance to handle
                  frequent updates and multiple concurrent users smoothly.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
      <div className="flex flex-col-reverse gap-4 xl:flex-col">
        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-3">
          <Card className="xl:col-start-1 xl:col-end-3">
            <p className="text-[22px]">Hard Skills</p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start gap-1 xl:flex-row">
                <p className="min-w-fit text-[18px] font-medium">
                  Familiar with :
                </p>
                <p className="text-base text-white/40">
                  Figma , UI/Ux , Node.JS, Python , Golang
                </p>
              </div>
              <div className="flex flex-col items-start gap-1 xl:flex-row">
                <p className="min-w-fit text-[18px] font-medium">Technical :</p>
                <p className="text-base text-white/40">
                  React.js , Next.js , Typescript , TailwindCss , Web
                  Accessibility , Optimization , Git, Redux and React query ,
                  Html SEO Base, Pixel Prefect Implementation , Writing Tests
                  (jest & etc) .
                </p>
              </div>
              <div className="flex flex-col items-start gap-1 xl:flex-row">
                <p className="min-w-fit text-[18px] font-medium">
                  Build & Development Tooling :
                </p>
                <p className="mt-[1px] text-base text-white/40">
                  npm , pnpm , Webpack , Vite , Monorepo
                </p>
              </div>
            </div>
          </Card>{" "}
          <Card>
            <p className="text-[22px]">Soft Skills</p>
            <div className="flex w-full flex-col gap-6">
              <div className="flex w-full items-center gap-3">
                <div className="size-[6px] rounded-full bg-white"></div>
                <p className="text-base">Conflict Management</p>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="size-[6px] rounded-full bg-white"></div>
                <p className="text-base">Problem Solving</p>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="size-[6px] rounded-full bg-white"></div>
                <p className="text-base">Persuasion & Negotiation</p>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="size-[6px] rounded-full bg-white"></div>
                <p className="text-base">Efficient Time Allocation</p>
              </div>
            </div>
          </Card>
        </div>
        <Card className="flex flex-col items-center gap-4 xl:flex-row xl:justify-between">
          <div className="w-fit rounded-xl bg-primary/5 px-4 py-3.5 text-center text-base text-primary">
            If my resume caught your interest, feel free to download it.
          </div>
          <Link className="w-full xl:w-fit" href={""}>
            <Button
              className="w-full rounded-full !bg-[#111] text-base xl:w-fit"
              variant={"outline"}
            >
              <p>Download</p>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </Link>
        </Card>
      </div>
      <ProjectsSection></ProjectsSection>
    </div>
  )
}

export default ResumePage
