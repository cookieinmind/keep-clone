export const Capitalize = (text: string): string => {
  let lowerCase = text.toLowerCase();
  let first = lowerCase.charAt(0);
  first = first.toUpperCase();
  lowerCase = lowerCase.slice(1, lowerCase.length);

  return first + lowerCase;
};
