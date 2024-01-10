export const clearElementsContent = (...elements: (HTMLElement | null)[]) => {
  elements.forEach((element: HTMLElement | null) => {
    if (element) element.innerHTML = '';
  });
};
