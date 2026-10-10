import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  external?: boolean
}

function Button({
  children,
  href,
  variant = 'primary',
  external = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition duration-200 sm:w-auto'

  const variants = {
    primary:
      'bg-sky-400 text-slate-950 hover:bg-sky-300',
    secondary:
      'border border-slate-700 bg-transparent text-slate-200 hover:border-slate-500 hover:bg-slate-900',
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </a>
  )
}

export default Button