export const getErrorMessage = (error: any): string => {
  const response = error?.response?.data;
  return response?.message || error?.message || "Something went wrong";
};
