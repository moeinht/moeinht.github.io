import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import React from "react"

function Footer() {
  return (
    <div className="flex min-h-max flex-col gap-8">
      <Card className="mt-4 flex h-full w-full flex-row">
        <div className="bg h-[210px] w-full rounded-xl bg-accent"></div>
        <div className="flex w-full flex-col justify-between gap-3">
          <p className="text-[34px] font-bold">
            Ready to kickstart your project with a touch of magic?
          </p>
          <p className="text-sm text-white/40">
            <span className="text-[18px] font-medium text-white">
              Reach out and let's make it happen ✨.{" "}
            </span>{" "}
            I'm also available for full-time or Part-time opportunities to push
            the boundaries of design and deliver exceptional work.
          </p>
          <Button className="w-fit rounded-full">Call Me</Button>
        </div>
      </Card>
      <div className="flex w-full items-start justify-between">
        <div className="flex gap-1">
          <p className="text-sm text-white/40">© 2026,</p>
          <p className="text-sm text-white">Moein Hoseini</p>
        </div>
        <p className="text-sm text-white/40">
          Crafted with ❤️ and loyal to Coffee
        </p>
      </div>
    </div>
  )
}

export default Footer
