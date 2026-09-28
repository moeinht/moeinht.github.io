import { Button } from "@/components/ui/button"
import { Heading, Lead, Paragraph } from "@/components/ui/typography"
import Earth from "@/model/earth"

export default function Home() {
  return (
    <div className="flex min-h-svh w-full items-center p-6 xl:p-8">
      <div className="flex flex-col gap-2">
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
      <div className="xl:w-[50%]">
        <Earth />
      </div>
    </div>
  )
}
