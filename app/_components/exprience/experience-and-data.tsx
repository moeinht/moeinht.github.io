import InfiniteMarquee from "@/components/infinite-marquee"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import ContactBox from "./contact-box"

function ExperienceAndData() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 text-white xl:grid-cols-3 xl:flex-row">
      <Card className="h-full w-full">
        <div className="flex w-full items-center justify-between">
          <div className="flex h-fit items-center gap-2">
            <p className="left-auto mb-1.25 text-[22px] leading-0">
              Experiences
            </p>
            <Badge variant={"outline"}>+3 Years</Badge>
          </div>
          <Link href={"/resume"}>
            <Button
              variant={"link"}
              className="h-fit w-fit gap-0 p-0 text-[12px] hover:no-underline"
            >
              <p>View Resume</p>
              <svg
                width="12"
                height="12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 20 20"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-1"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </Link>
        </div>
        <div className="relative flex h-full w-full items-start pl-4">
          <div className="absolute left-0 h-full min-h-full w-px rounded-full bg-gradient-to-b from-white/20 to-transparent"></div>
          <div className="flex h-[70%] w-full flex-col justify-between gap-8">
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
        <Card className="w-full">
          <div className="flex w-full items-center justify-start">
            <div className="flex h-fit items-center gap-2">
              <p className="left-auto text-[22px]">Technical Knowledge</p>
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
        <Card className="w-full">
          <div className="flex w-full items-center justify-start">
            <div className="flex h-fit flex-col gap-2">
              <p className="left-auto text-[22px]">Essential Stacks</p>
              <p className="text-[12px] text-white/50">
                A Comprehensive Collection of Useful Tools to Support and
                Optimize My Workflow
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-5 gap-2">
            <div className="flex items-center justify-center rounded-xl bg-popover p-4">
              <Image
                width={16}
                height={16}
                src={"/storybook.webp"}
                alt="story-book"
                className="h-full w-full object-contain"
              />
            </div>{" "}
            <div className="flex items-center justify-center rounded-xl bg-popover p-4">
              <Image
                width={30}
                height={30}
                src={"/docker.webp"}
                alt="docker"
                className="h-full w-full object-contain"
              />
            </div>{" "}
            <div className="flex items-center justify-center rounded-xl bg-popover p-4">
              <svg width="20" height="20" fill="#ffffff" viewBox="0 0 24 24">
                <path d="m19.02 12.55-7.46 7.46c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0l7.46-7.46c.46-.46.46-1.19 0-1.65s-1.19-.46-1.65 0ZM19.17 3.34c-.46-.46-1.19-.46-1.65 0L3.34 17.52c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0L19.16 4.99c.46-.46.46-1.19 0-1.65Z" />
              </svg>
            </div>{" "}
            <div className="flex items-center justify-center rounded-xl bg-popover p-4">
              <Image
                width={30}
                height={30}
                src={"/trello.webp"}
                alt="trello"
                className="h-full w-full object-contain"
              />
            </div>{" "}
            <div className="flex items-center justify-center rounded-xl bg-popover p-4">
              <Image
                width={30}
                height={30}
                src={"/turbopack-light.webp"}
                alt="turbopack"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Card>
      </div>
      <ContactBox />
    </div>
  )
}

export default ExperienceAndData
