import { Card } from "@/components/ui/card"
import ExperienceAndData from "./_components/experience-and-data"
import HeroSection from "./_components/hero-section"
import NavBar from "./_components/nav-bar"
import ProjectBox from "./_components/project-pox"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-30">
      <HeroSection />
      <main className="flex w-full flex-col gap-4">
        <ExperienceAndData />
        <Card>
          <div className="flex items-start justify-between">
            <p className="text-[22px]">Works & Projects</p>
            <p className="text-sm text-white/40">
              Check out some of my design projects, meticulously crafted with
              love and dedication .
            </p>
          </div>
          <div className="grid w-full grid-cols-3 gap-4">
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
            <ProjectBox />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/40">
              Interested in Exploring More?
            </p>
            <Button
              variant={"outline"}
              className="rounded-full px-4 py-4 text-sm"
              size={"sm"}
            >
              View All
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}
