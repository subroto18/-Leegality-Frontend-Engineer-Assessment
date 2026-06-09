export const paginationClasses = {
  base: `
      w-10 h-10
      flex items-center justify-center
      rounded-md
      transition-all duration-200
      font-medium
    `,
  default: `
      bg-white
      border border-gray-200
      text-gray-700
      hover:border-blue-500
      hover:text-blue-500
      hover:shadow-md
      cursor-pointer
    `,
  active: `
      bg-blue-600
      text-white
      border-blue-600
      shadow-md
    `,
  nav: `
      bg-white
      border border-gray-200
      hover:shadow-md
    `,
};
