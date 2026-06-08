export const baseInputClass = `
  w-full
  transition-all
  duration-200
`;

export const baseTextAreaClass = `
  w-full
  transition-all
  duration-200
`;

export const sizeClasses = {
  sm: "h-10 text-sm px-3",
  md: "h-11 text-base px-4",
  lg: "h-12 text-base px-4",
};

export const textAreaSizeClasses = {
  sm: "text-sm px-3 py-2",
  md: "text-base px-4 py-3",
  lg: "text-base px-4 py-3",
};

export const variantClasses = {
  default: `
    border-gray-300
    hover:border-blue-500
    focus:border-blue-500
  `,

  search: `
    !border-0
    !rounded-xl
    !bg-white
    shadow-sm
  `,

  error: `
    !border-red-500
    hover:!border-red-500
    focus:!border-red-500
  `,
};
