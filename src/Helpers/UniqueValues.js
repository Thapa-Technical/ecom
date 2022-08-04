export const uniqueValues = (data, type) => {
  let unique = data.map((product) => product[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  return ["all", ...new Set(unique)];
};
