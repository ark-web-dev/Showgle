export const debounce = <T>(func: Function, ms: number) => {
  let timer: number;

  return function (this: T, ...args: []) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };
};
