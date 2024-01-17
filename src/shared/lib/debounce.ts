export const debounce = <F extends (...args: never[]) => unknown>(
  func: F,
  delay: number
): ((...args: never[]) => unknown) => {
  let timeout: ReturnType<typeof setTimeout>;

  const debounced = (...args: never[]) => {
    let result: unknown;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      result = func.apply(this, args);
    }, delay);

    return result!;
  };

  return debounced;
};
