import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import React from "react"

function Footer() {
  return (
    <div className="flex min-h-max flex-col gap-8">
      <Card className="mt-4 flex h-full w-full flex-col bg-transparent xl:flex-row xl:bg-card">
        <div className="flex h-[210px] items-center justify-center overflow-hidden rounded-xl bg-accent">
          <Image
            src={"/cofe.webp"}
            width={300}
            height={300}
            alt="coffe"
          ></Image>
        </div>
        <div className="flex w-full flex-col justify-between gap-3">
          <p className="text-[22px] font-bold xl:text-[34px]">
            Ready to kickstart your project with a touch of magic?
          </p>
          <p className="text-sm text-white/40">
            <span className="text-[16px] font-medium text-white xl:text-[18px]">
              Reach out and let's make it happen ✨.{" "}
            </span>{" "}
            I'm also available for full-time or Part-time opportunities to push
            the boundaries of design and deliver exceptional work.
          </p>
          <Link href={"tel:+989907771058"} target="__blank">
            <Button className="w-full rounded-full xl:w-fit">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 22 22"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064 1.468-1.545-.19-3.31-1.108-4.609-1.723-2.435-5.504.927-5.39 3.066.363 6.746 7.66 14.74 14.726 14.042 2.21-.218 4.75-4.21 2.215-5.669-1.268-.73-3.009-2.17-4.343-.767M14 3a7 7 0 0 1 7 7m-7-3a3 3 0 0 1 3 3" />
              </svg>
              <p>Call Me</p>
            </Button>
          </Link>
        </div>
      </Card>
      <div className="flex w-full flex-col items-center justify-center gap-1 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex gap-1">
          <p className="text-sm text-white/40">© 2026,</p>
          <p className="text-sm text-white">Moein Hoseini</p>
        </div>
        <p className="text-sm text-white/40">
          Crafted with <span className="text-white">❤️</span> and loyal to
          Coffee.
        </p>
      </div>
    </div>
  )
}

export default Footer
