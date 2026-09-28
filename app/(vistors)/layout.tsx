import react from "react"

export default function VisitorsLayout({
  children,
}: {
  children: react.ReactNode
}) {
  return (
    <div className="flex h-full w-full flex-col items-center bg-background">
      {children}
    </div>
  )
}
