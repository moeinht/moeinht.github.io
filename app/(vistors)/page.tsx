import { Button } from "@/components/ui/button"
import { Heading, Lead, Paragraph } from "@/components/ui/typography"
import Earth from "@/model/earth"

export default function Home() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-around gap-6 xl:flex-row xl:p-8">
      <div className="flex flex-col gap-2 p-4 pb-0 xl:p-0">
        <div className="flex flex-col gap-1">
          <Heading level={2} className="tex">
            Leave a memory!
            <br /> Discover someone else's.
          </Heading>
          <Lead>
            Pin your moments to real places and explore the memories people have
            left behind.
          </Lead>
        </div>
      </div>
      <div className="w-full xl:w-[550px]">
        <Earth />
      </div>
    </div>
  )
}
