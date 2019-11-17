
export default (input: string) => {
  let h = 0;
  const len = input.length;
  const t = 2147483648;
  for (let i = 0; i < len; i++) {
    h = 31 * h + input.charCodeAt(i);
    if (h > 2147483647) h %= t;
  }
  return h;
};
