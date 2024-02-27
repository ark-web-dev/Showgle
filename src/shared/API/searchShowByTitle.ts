import { APP_API_URL } from './const';
import { getData } from './getData';

export const searchShowByTitle = async (value: string) => {
  const response = await getData(
    `${APP_API_URL}/search/shows?q=${value}&limit=10`
  );

  return response;
};
