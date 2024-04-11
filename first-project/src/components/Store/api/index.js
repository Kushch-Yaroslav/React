const API_BASE = "https://fakestoreapi.com/products";

export const getStore = () => {
  return fetch(API_BASE).then((response) => response.json());
};
