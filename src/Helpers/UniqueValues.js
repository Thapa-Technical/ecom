export const uniqueValues = (data, type) => {
  let unique = data.map((product) => product[type]);
  console.log("unique" + unique);
  if (type === "colors") {
    unique = unique.flat();
  }
  // to get only the unique value we use the set data struc
  return ["all", ...new Set(unique)];
};
