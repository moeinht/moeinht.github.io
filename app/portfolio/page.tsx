import React from "react"
import ProjectsSection from "../_components/projects-section"
import ContactBox from "../_components/exprience/contact-box"
import { Card } from "@/components/ui/card"
import { Metadata } from "next"
import Image from "next/image"
export const metadata: Metadata = {
  title: "Works and Projects | Moein Hoseini",
}
function PortfolioPage() {
  return (
    <div className="relative flex w-full flex-col items-center justify-start gap-4">
      <ProjectsSection>
        <div className="flex items-start justify-center">
          <p className="text-[24px] font-medium xl:text-[32px]">
            Works & Projects
          </p>
        </div>
      </ProjectsSection>
      <div className="grid h-full w-full grid-cols-1 gap-4 xl:grid-cols-3">
        <ContactBox />
        <Card className="gap-4 xl:col-start-2 xl:col-end-4">
          <p className="left-auto mb-1.25 text-[22px]">My Favorite Shots</p>
          <div className="h-[300px] w-full rounded-3xl bg-accent"></div>
        </Card>
      </div>
    </div>
  )
}

export default PortfolioPage
