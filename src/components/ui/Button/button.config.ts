export const variantClasses = {
  default: `
      !border-slate-200
      !bg-slate-100
      !text-slate-900
      hover:!border-slate-300
      hover:!bg-slate-200
    `,

  primary: `
      !border-0
      !bg-cyan-500
      !text-white
      hover:!bg-cyan-400
      active:!bg-cyan-600
    `,

  auth: `
      !rounded-2xl
      !border-0
      !bg-cyan-500
      !text-white
      !font-semibold
      hover:!bg-cyan-400
    `,

  danger: `
      !border-0
      !bg-red-500
      !text-white
      hover:!bg-red-400
    `,

  ghost: `
      !border-white/10
      !bg-white/[0.04]
      !text-slate-200
      hover:!border-cyan-500/30
      hover:!bg-white/[0.08]
    `,

  icon: `
      !border-0
      !bg-transparent
      !shadow-none
      !p-0
      !text-slate-400
      hover:!text-primary
      hover:!bg-transparent
    `,
  ghostIcon: `
    !border-none
    !bg-transparent
    !shadow-none
    !text-white
    hover:!opacity-80
  `,
  pagination: `
  !bg-white
  !border-slate-200
  !text-slate-700
  hover:!border-cyan-500
  hover:!text-cyan-500
  hover:!shadow-md
`,

  paginationActive: `
  !bg-primary
  !border-primary
  !text-white
  hover:!bg-primary
`,
  filterClear: `
  !border-0
  !bg-transparent
  !shadow-none
  !text-primary
  hover:!text-primary/80
  hover:!bg-transparent
  !px-0
  `,
  filterApply: `
  !w-full
  !bg-primary
  !border-primary
  !text-white
  hover:!bg-primary/90
  hover:!border-primary/90
`,
} as const;
