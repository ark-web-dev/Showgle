export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => ReturnType<F>) => {
  let timeout: ReturnType<typeof setTimeout>;

  const debounced = (...args: Parameters<F>) => {
    let result: ReturnType<F>;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      result = func.apply(this, args);
    }, delay);

    return result!;
  };

  return debounced;
};
