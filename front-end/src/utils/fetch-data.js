export const fetchData = async (url, method, payload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(payload),
  };
  return await fetch(url, config);
};
