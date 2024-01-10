export const hideOnDocumentClick = (id: string, callback: Function) => {
  document.addEventListener('click', (e: MouseEvent) => {
    const searchWrapper = document.getElementById(id) as HTMLElement | null;

    if (!searchWrapper?.contains(e.target as Node)) {
      if (callback) {
        callback?.();
      } else {
        if (searchWrapper) searchWrapper.style.display = 'none';
      }
    }
  });
};
