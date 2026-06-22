import Image from "next/image"

function HeroSection() {
  return (
    <header className="flex w-full flex-col gap-40">
      <div className="flex w-full flex-1 flex-col items-center justify-between xl:flex-row">
        <div className="flex w-full flex-col items-start gap-2.5">
          <p className="text-lg text-muted-foreground">Hey There</p>
          <h1 className="text-[38px]">
            I’m Moein, a frontend developer building intuitive, user-focused
            interfaces with pixel-perfect attention to detail.
          </h1>
          <p className="text-lg text-success/50">Available for Hiring</p>
        </div>
        <Image
          src={"/heroPhoto.webp"}
          width={400}
          height={400}
          className="h-full w-[40%]"
          alt="heroPhoto"
        ></Image>
      </div>
    </header>
  )
}

export default HeroSection
