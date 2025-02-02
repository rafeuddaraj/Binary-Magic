export const delay = (s = 1 * 1000) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("Resolve");
    }, s * 1000);
  });
};
