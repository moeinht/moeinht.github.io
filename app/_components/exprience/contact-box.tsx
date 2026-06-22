import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

function ContactBox({ className }: { className?: string }) {
  return (
    <Card className={cn("h-full w-full", className)}>
      <div className="flex w-full items-center justify-between">
        <div className="flex h-fit items-center gap-2">
          <p className="left-auto mb-1.25 text-[22px] leading-[24px]">
            Connect
          </p>
        </div>
      </div>
      <div className="flex h-full w-full flex-col justify-between gap-8">
        <div className="flex h-full w-full flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 22 22"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6zm5-1.775v.5" />
                <path d="M8 16.375V10.75m4 5.625V13.5m0 0v-2.75m0 2.75c0-1.288 1.222-2 2.4-2 1.6 0 1.6 1.375 1.6 2.875v2" />
              </svg>
              <p className="text-base">LinkedIn</p>
            </div>
            <Link
              href={"https://www.linkedin.com/in/moein-hoseini-dev/"}
              target="__blank"
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 22 22"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity={0.4}
              >
                <path d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1" />
              </svg>
            </Link>
          </div>{" "}
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 22 22"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 5 4.672 11.373c-.395.164-.592.247-.643.354a.3.3 0 0 0 .016.29c.063.1.268.16.68.281L10.5 14M20 5l-2.065 13.049c-.04.254-.06.381-.127.45a.3.3 0 0 1-.223.097c-.097 0-.205-.072-.421-.216l-2.93-1.956M20 5l-9.5 9m0 0 .156 4.3c0 .334 0 .501.069.585.06.074.15.116.246.115.11-.001.24-.108.5-.32l2.764-2.256M10.5 14l3.735 2.424" />
              </svg>
              <p className="text-base">Telegeram</p>
            </div>
            <Link href={"https://t.me/moeiin_69"} target="__blank">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 22 22"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity={0.4}
              >
                <path d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1" />
              </svg>
            </Link>
          </div>{" "}
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 22 22"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m19 4-5.93 6.93M5 20l5.93-6.93m0 0 5.795 6.587c.19.216.483.343.794.343h1.474c.836 0 1.307-.85.793-1.435L13.07 10.93m-2.14 2.14L4.214 5.435C3.7 4.85 4.17 4 5.007 4h1.474c.31 0 .604.127.794.343l5.795 6.587" />
              </svg>
              <p className="text-base">X</p>
            </div>
            <Link href={"https://x.com/moein_hst"} target="__blank">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 22 22"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity={0.4}
              >
                <path d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1" />
              </svg>
            </Link>
          </div>{" "}
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 22 22"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 15.668q.675.081 1 .618c.326.537 1.537 2.526 2.913 2.526H9.5m5.672-3.513q.823 1.078.823 1.936V21m-5.625-5.609q-.87.954-.869 1.813V21" />
                <path d="M15.172 15.299c1.202-.25 2.293-.682 3.14-1.316 1.448-1.084 2.188-2.758 2.188-4.411 0-1.16-.44-2.243-1.204-3.16-.425-.511.819-3.872-.286-3.359-1.105.514-2.725 1.198-3.574.947-.909-.268-1.9-.416-2.936-.416-.9 0-1.766.111-2.574.317-1.174.298-2.296-.363-3.426-.848-1.13-.484-.513 3.008-.849 3.422C4.921 7.38 4.5 8.44 4.5 9.572c0 1.653.895 3.327 2.343 4.41.965.722 2.174 1.183 3.527 1.41" />
              </svg>
              <p className="text-base">GitHub</p>
            </div>
            <Link href={"https://github.com/moeinht"} target="__blank">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 22 22"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity={0.4}
              >
                <path d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1" />
              </svg>
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <svg
                width="21"
                height="21"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 25 25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064 1.468-1.545-.19-3.31-1.108-4.609-1.723-2.435-5.504.927-5.39 3.066.363 6.746 7.66 14.74 14.726 14.042 2.21-.218 4.75-4.21 2.215-5.669-1.268-.73-3.009-2.17-4.343-.767M14 3a7 7 0 0 1 7 7m-7-3a3 3 0 0 1 3 3" />
              </svg>
              <p className="text-base">+989907771058</p>
            </div>
            <Link href={"tel:+989907771058"} target="__blank">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 22 22"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity={0.4}
              >
                <path d="M21 3h-6.75M21 3v6.75M21 3l-8.25 8.25M9.4 3c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C3 6.04 3 7.16 3 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C6.04 21 7.16 21 9.4 21h5.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C21 17.96 21 16.84 21 14.6v-1.1" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="boarder-boarder flex items-center gap-3 border-t pt-3">
          <div className="size-[58px] rounded-[10px] bg-white/10"></div>
          <div className="flex flex-col">
            <p className="text-sm text-white/40">Let's Work Together!</p>
            <p className="text-base">moein.devht@gmail.com</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ContactBox
