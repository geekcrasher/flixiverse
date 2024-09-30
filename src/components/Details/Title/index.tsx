import { memo } from "react";
import { cn } from "@/lib/utils";

type TitleProps = {
  title: string,
  className?: string
}

const Title = memo(({ title, className }: TitleProps) => {
  return <p className={cn("text-gray-300 font-medium font-roboto", className)}>{title}</p>;
})

export default Title;