"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

function NavBar() {
  const path = usePathname()

  return (
    <div className="sticky top-8 z-50 mb-30 flex h-max w-full items-center justify-center">
      <Card className="!shadow-[inset_0px_0px_4px_rgba(0,0,0,0.1),0_1_4px_rgba(0,0,0,0.1)]! flex flex-row items-center justify-between gap-3 rounded-full bg-trans-card p-2 !pt-2 backdrop-blur-[25px]">
        <div className="overflow-hidden rounded-full">
          <Image
            alt="Profile"
            width={40}
            height={40}
            src={"/MoeinPicture.webp"}
          />
        </div>
        <nav className="flex items-center justify-between gap-3 text-base">
          <Link
            href={"#"}
            className={"flex items-center justify-center gap-2.5"}
          >
            <Button data-active={path == "/"} variant={"ghost"}>
              {/* <span></span> */}
              <p>Home</p>
            </Button>
          </Link>
          <Link
            href={"#"}
            className={"flex items-center justify-center gap-2.5"}
          >
            <Button data-active={path == "/projects"} variant={"ghost"}>
              {/* <span></span> */}
              <p>Work & projects</p>
            </Button>
          </Link>
          <Link
            href={"#"}
            className={"flex items-center justify-center gap-2.5"}
          >
            <Button data-active={path == "/resume"} variant={"ghost"}>
              {/* <span></span> */}
              <p>Resume</p>
            </Button>
          </Link>
        </nav>
        <Button className="rounded-full">Call Me</Button>
      </Card>
    </div>
  )
}

export default NavBar
