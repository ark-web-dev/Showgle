export const createElement = <T extends keyof HTMLElementTagNameMap>(
  type: T | Function,
  props?: { [key: string]: unknown },
  ...children: Array<unknown>
): HTMLElementTagNameMap[T] => {
  let element;

  if (typeof type === 'function') {
    element = type();
  } else {
    element = window.document.createElement(type);
  }

  const otherProps = props as Partial<HTMLElementTagNameMap[T]>;

  for (const prop in otherProps) {
    if (prop.slice(0, 2) === 'on') {
      element.addEventListener(prop.slice(2).toLowerCase(), otherProps[prop]);
    } else {
      element[prop] = otherProps[prop]!;
    }
  }

  if (children.length) {
    children = children.map((child) =>
      typeof child === 'function' ? child() : child
    );

    element.append(...children.filter((child) => Boolean(child)));
  }

  return element;
};
