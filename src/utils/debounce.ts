export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number = 500
) => {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    // Clear previous timeout if the function is called again
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      // Call the actual function after the delay
      func(...args);
    }, delay);
  };
}