export const getLocalStorage = <T>(key: string): T | null => {
  let item = null;

  try {
    item = localStorage.getItem(key);
  } catch (error) {
    console.log(`LocalStorage Error ${error}`);
  }

  if (item) {
    try {
      item = JSON.parse(item);
    } catch (error) {
      console.log(`Parsing Error ${error}`);
      return null;
    }
  }

  return item;
};
