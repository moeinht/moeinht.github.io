"use client"

import * as React from "react"
import { cn } from "cn"

export const typography = {
  h1: "text-5xl font-bold leading-[1.2] tracking-tight md:text-6xl",
  h2: "text-4xl font-bold leading-[1.3] tracking-tight md:text-5xl",
  h3: "text-3xl font-bold leading-[1.4] tracking-tight md:text-4xl",
  h4: "text-2xl font-medium leading-[1.5] tracking-tight md:text-3xl",
  h5: "text-xl font-medium leading-[1.6] tracking-tight",
  h6: "text-lg font-medium leading-[1.6] tracking-tight",

  display: "text-6xl font-extrabold leading-[1.1] tracking-tight md:text-7xl",

  lead: "text-lg text-muted-foreground leading-relaxed",

  paragraph: "text-base leading-relaxed text-[--silent-foreground]",

  small: "text-sm text-muted-foreground leading-relaxed",

  caption: "text-xs text-muted-foreground leading-relaxed",

  link: "text-primary underline-offset-2 hover:underline underline",

  underline: "underline underline-offset-2",

  highlight: "bg-primary/10 text-primary",

  mark: "bg-secondary/20 text-secondary",

  strong: "font-bold",

  emphasis: "italic",

  underlineHover: "hover:underline hover:underline-offset-2",

  blockQuote: "border-l-4 pl-4 text-[--silent-foreground] leading-relaxed italic",

  listItem: "flex items-start space-x-2",

  listBullet: "flex h-1.5 w-1.5 shrink-0 rounded-tr-[2px] rounded-bl-[2px] bg-primary",
} as const

export type TypographyClassKey = keyof typeof typography

export function Typography({
  type = "paragraph",
  className,
  children,
}: {
  type: TypographyClassKey
  className?: string
  children: React.ReactNode
}) {
  const classes = typography[type]

  return <p className={`${classes} ${className || ""}`}>{children}</p>
}

export function Heading({
  level = 1,
  className,
  children,
}: {
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  children: React.ReactNode
}) {
  const type = `h${level}` as TypographyClassKey

  return <h1 className={typography[type] || ""}>{children}</h1>
}

export function Span({
  className,
  children,
  ...props
}: {
  className?: string
  children: React.ReactNode
  [key: string]: any
}) {
  return <span className={className} {...props}>{children}</span>
}

export function Lead({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn(typography.lead, className ?? "")}>{children}</p>
}

export function Paragraph({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn(typography.paragraph, className ?? "")}>{children}</p>
}