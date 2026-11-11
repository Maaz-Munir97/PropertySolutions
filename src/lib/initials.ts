export const initialsOf = (name: string) =>
  name
    .split(/[\s&]+/)
    .filter((part) => /^[A-Za-z]/.test(part))
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
