
type HandleResizeType<T> = {
  setState: React.Dispatch<React.SetStateAction<T>>
  breakpoint: number
  true_value: T
  false_value: T
}

export const handleResize = <T>(
  { setState, breakpoint, true_value, false_value }: HandleResizeType<T>
) => {
  if (window.innerWidth < breakpoint) {
    setState(true_value)
  } else {
    setState(false_value)
  }
}