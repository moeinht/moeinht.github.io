import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import NavBar from "./_components/nav-bar"
import Footer from "./_components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="relative flex flex-col items-center justify-start p-4 xl:p-8 xl:pt-8">
        <NavBar />
        <div className="flex w-full flex-col justify-start md:max-w-[1280px]">
          <ThemeProvider>{children}</ThemeProvider>
          <Footer />
        </div>
      </body>
    </html>
  )
}
