export const getData = async (url: string) => {
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  }

  const error = {
    status: response.status,
    customError: 'Error',
  };

  throw error;
};
