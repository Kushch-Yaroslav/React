export const getUser = () => {
  return fetch("./user.json").then((res) => res.json());
};
