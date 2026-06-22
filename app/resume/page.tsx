import { Card } from "@/components/ui/card"
import Image from "next/image"

function ResumePage() {
  return (
    <div className="relative flex w-full flex-col items-center justify-start gap-4">
      <Card className="flex w-full flex-col xl:flex-row">
        <div className="flex h-[179px] w-full items-center justify-center overflow-hidden rounded-[18px] xl:h-[180] xl:w-[180]">
          <Image
            alt="Profile"
            width={180}
            height={160}
            src={"/lsUU6.jpg"}
            className="aspect- w-full overflow-hidden rounded-[18px] xl:aspect-square"
          />
        </div>
        <div className="flex w-full flex-col gap-[10px]">
          <p className="text-[22px] font-medium">About Me</p>
          <p className="text-base leading-[30px] text-white/70">
            I'm a{" "}
            <span className="text-[17px] !font-bold text-white">
              Front-end Developer
            </span>{" "}
            with{" "}
            <span className="text-[17px] !font-bold text-white">
              3 years of experience
            </span>{" "}
            building production web applications using{" "}
            <span className="text-[17px] !font-bold text-white">React</span> ,
            <span className="text-[17px] !font-bold text-white">Next.js</span> ,
            and{" "}
            <span className="text-[17px] !font-bold text-white">
              TypeScript
            </span>{" "}
            . I specialize in building{" "}
            <span className="text-[17px] !font-bold text-white">fast</span> ,
            <span className="text-[17px] !font-bold text-white">scalable</span>{" "}
            , and{" "}
            <span className="text-[17px] !font-bold text-white">
              maintainable UI systems
            </span>{" "}
            with a strong focus on{" "}
            <span className="text-[17px] !font-bold text-white">
              clean architecture
            </span>{" "}
            and{" "}
            <span className="text-[17px] !font-bold text-white">
              reusable components
            </span>
            . I actively improve{" "}
            <span className="text-[17px] !font-bold text-white">
              performance
            </span>{" "}
            ,
            <span className="text-[17px] !font-bold text-white">
              rendering efficiency
            </span>{" "}
            , and{" "}
            <span className="text-[17px] !font-bold text-white">
              user experience
            </span>{" "}
            through modern front-end practices, optimized data flow, and
            component-driven design.
          </p>
        </div>
      </Card>
    </div>
  )
}

export default ResumePage
