import { Card } from "@/components/ui/card"
import ExperienceAndData from "./_components/exprience/experience-and-data"
import HeroSection from "./_components/hero-section"
import ProjectBox from "./_components/project-pox"
import ProjectsSection from "./_components/projects-section"

export default function Page() {
  return (
    <div className="relative flex flex-col items-center justify-start gap-10 xl:gap-30">
      <HeroSection />
      <main className="flex w-full flex-col gap-10 xl:gap-4">
        <ExperienceAndData />
        <ProjectsSection></ProjectsSection>
      </main>
    </div>
  )
}
