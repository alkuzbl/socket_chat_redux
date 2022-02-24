export const handleResponseError = (err: any): string => {
  const error = err.response
    ? err.response.data.message
    : `${err.message}, more details in the console`;
  return error;
};
