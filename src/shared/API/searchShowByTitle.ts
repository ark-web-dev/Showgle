import { APP_API_URL } from './const';
import { getData } from './getData';

export const searchShowByTitle = async (value: string) => {
  let response;

  try {
    response = await getData(`${APP_API_URL}/search/shows?q=${value}&limit=10`);
  } catch (error) {
    throw error;
  }

  return response;
};
