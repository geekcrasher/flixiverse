import { useEffect } from "react";
import { handleResize } from "@/utils/handleResize";

type HandleResizeType<T> = {
  setState: React.Dispatch<React.SetStateAction<T>>
  breakpoint: number
  true_value: T
  false_value: T
}

export const useHandleResize = <T>({
  setState,
  breakpoint,
  true_value,
  false_value
}: HandleResizeType<T>) => {
  useEffect(() => {
    const handleResizeEvent = () => handleResize({ setState, breakpoint, true_value, false_value });

    // Call the handler once to set the initial state
    handleResizeEvent();

    window.addEventListener('resize', handleResizeEvent);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResizeEvent);
    };
  }, [setState, breakpoint, true_value, false_value]);
};