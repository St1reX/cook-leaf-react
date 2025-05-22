export const capitalizeFirstLetter = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const capitalizeAllWords = (str) => {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
};
