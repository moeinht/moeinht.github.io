import InfiniteMarquee from "@/components/infinite-marquee"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import React from "react"

function ExperienceAndData() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 text-white xl:grid-cols-3 xl:flex-row">
      <Card className="h-full w-full">
        <div className="flex w-full items-center justify-between">
          <div className="flex h-fit items-center gap-2">
            <p className="left-auto mb-1.25 text-[22px] leading-0">
              Experiences
            </p>
            <Badge variant={"outline"}>+6 Years</Badge>
          </div>
          <Button variant={"link"} className="h-fit w-fit p-0 text-[12px]">
            View All
          </Button>
        </div>
        <div className="relative flex h-[70%] w-full items-start pl-4">
          <div className="absolute left-0 h-full w-px rounded-full bg-gradient-to-b from-white/20 to-transparent"></div>
          <div className="flex min-h-full w-full flex-col justify-between gap-8">
            <div className="relative flex flex-col gap-2">
              <div className="absolute top-0 -left-5 size-2 rounded-full bg-success"></div>
              <div className="flex w-full items-start justify-between">
                <p className="text-sm leading-2.5 text-white">KishPort</p>
                <p className="text-[12px] text-white/70">Front-End Engineer</p>
              </div>
              <p className="text-[12px] text-white/70">Nov 2025 - Present </p>
            </div>{" "}
            <div className="relative flex flex-col gap-2">
              <div className="absolute top-0 -left-5 size-2 rounded-full bg-white/70"></div>
              <div className="flex w-full items-start justify-between">
                <p className="text-sm leading-2.5 text-white">Balynor</p>
                <p className="text-[12px] text-white/70">Front-End Developer</p>
              </div>
              <p className="text-[12px] text-white/70">Nov 2025 - Present </p>
            </div>{" "}
            <div className="relative flex flex-col gap-2">
              <div className="absolute top-0 -left-5 size-2 rounded-full bg-white/70"></div>
              <div className="flex w-full items-start justify-between">
                <p className="text-sm leading-2.5 text-white">Ezhoosh</p>
                <p className="text-[12px] text-white/70">Front-End Developer</p>
              </div>
              <p className="text-[12px] text-white/70">Nov 2025 - Present </p>
            </div>{" "}
          </div>
        </div>
      </Card>
      <div className="flex w-full flex-col gap-4">
        <Card className="w-full gap-0">
          <div className="mb-4 flex w-full items-center justify-start">
            <div className="flex h-fit items-center gap-2">
              <p className="left-auto mb-1.25 text-[22px] leading-[24px]">
                Technical Knowledge
              </p>
            </div>
          </div>
          <div
            className="max-w-[50xp]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <InfiniteMarquee>
              {/* {skills.map((img, i) => (
                <div
                  key={i}
                  className="w-flex flex items-center justify-center rounded-xl bg-popover-foreground p-4"
                >
                  <img
                    src={img}
                    alt="skill"
                    className="h-full w-full object-contain"
                  />
                </div>
              ))} */}
            </InfiniteMarquee>
          </div>
        </Card>
        <Card className="w-full gap-0">
          <div className="mb-4 flex w-full items-center justify-start">
            <div className="flex h-fit flex-col gap-2">
              <p className="left-auto mb-1.25 text-[22px] leading-[24px]">
                Essential Stacks
              </p>
              <p className="text-[12px] text-white/50">
                A Comprehensive Collection of Useful Tools to Support and
                Optimize My Workflow
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-4 gap-2">
            <div className="flex items-center justify-center rounded-xl bg-popover p-4">
              <Image
                width={30}
                height={30}
                src={"/storybook.webp"}
                alt="skill"
                className="h-full w-full object-contain"
              />
            </div>{" "}
            <div className="flex items-center justify-center rounded-xl bg-popover p-4">
              <Image
                width={30}
                height={30}
                src={"/docker.webp"}
                alt="skill"
                className="h-full w-full object-contain"
              />
            </div>{" "}
            <div className="flex items-center justify-center rounded-xl bg-popover p-4">
              <Image
                width={30}
                height={30}
                src={"/trello.webp"}
                alt="skill"
                className="h-full w-full object-contain"
              />
            </div>{" "}
            <div className="flex items-center justify-center rounded-xl bg-popover p-4">
              <Image
                width={30}
                height={30}
                src={"/turbopack-light.webp"}
                alt="skill"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Card>
      </div>
      <Card className="h-full w-full gap-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex h-fit items-center gap-2">
            <p className="left-auto mb-1.25 text-[22px] leading-[24px]">
              Connect
            </p>
          </div>
        </div>
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex h-full w-full flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-2">
                <div></div>
                <p className="text-base">LinkedIn</p>
              </div>
              <div></div>
            </div>{" "}
            <div className="flex items-start justify-between">
              <div className="flex gap-2">
                <div></div>
                <p className="text-base">Telegeram</p>
              </div>
              <div></div>
            </div>{" "}
            <div className="flex items-start justify-between">
              <div className="flex gap-2">
                <div></div>
                <p className="text-base">X</p>
              </div>
              <div></div>
            </div>{" "}
            <div className="flex items-start justify-between">
              <div className="flex gap-2">
                <div></div>
                <p className="text-base">GitHub</p>
              </div>
              <div></div>
            </div>
            <div className="flex items-start justify-between">
              <div className="flex gap-2">
                <div></div>
                <p className="text-base">+989907771058</p>
              </div>
              <div></div>
            </div>
          </div>
          <div className="boarder-boarder flex items-center gap-3 border-t pt-4">
            <div className="size-[58px] rounded-[10px] bg-white/10"></div>
            <div className="flex flex-col">
              <p className="text-sm text-white/40">Let's Work Together!</p>
              <p className="text-base">moein.devht@gmail.com</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ExperienceAndData
