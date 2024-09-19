import React, { useMemo } from "react";

type DateProps = {
  isoDate: string;
}

const DateFormatter = React.memo(({ isoDate }: DateProps) => {
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

  return <p className='text-gray-300 text-[0.8rem]'>{formattedDate}</p>;
});

export default DateFormatter;