export const fetchData = async (url, method, payload) => {
  let config = {
    headers: {
      "Content-Type": "application/json",
    },
    method,
  };
  if (method === "POST") {
    config = { ...config, body: JSON.stringify(payload) };
  }
  return await fetch(url, config);
};
