export const getLocalStorage = <T>(key: string): T | null => {
  let item;

  try {
    item = localStorage.getItem(key);
  } catch (error) {
    console.log(`LocalStorage Error ${error}`);
  }

  return item ? JSON.parse(item) : null;
};
