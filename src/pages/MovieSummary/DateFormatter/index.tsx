import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

type DateProps = {
  isoDate: string
  className?: string
}

const DateFormatter = React.memo(({ isoDate, className }: DateProps) => {
  const formattedDate = useMemo(() => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    try {
      const date = new Date(isoDate);
      return date.toLocaleDateString('en-US', options)

    } catch (error) {
      console.error(`Invalid date:`, isoDate)
    }
  }, [isoDate])

  return <p className={cn('text-sm', className)}>{formattedDate}</p>;
});

export default DateFormatter;