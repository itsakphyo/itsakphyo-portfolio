import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  id: string
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ id, title, subtitle, className }: SectionHeadingProps) {
  return (
    <div id={id} className={cn("space-y-2 scroll-mt-20", className)}>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-sm md:text-base text-muted-foreground">{subtitle}</p>}
      <div className="h-1 w-20 bg-primary rounded-full" />
    </div>
  )
}
