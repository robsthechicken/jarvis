import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'Primary' | 'Secondary'
  label?: string
}

export function Button({
  children,
  className,
  variant = 'Primary',
  label,
  ...props
}: ButtonProps) {
  const isSecondary = variant === 'Secondary'

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center px-[22px] py-[12px] rounded-[10px] font-semibold text-[15px] leading-[1.4] transition-colors cursor-pointer whitespace-nowrap',
        isSecondary
          ? 'bg-white border border-[#d1d5db] text-[#111827] hover:bg-[#f9fafb]'
          : 'bg-[#0b1220] text-white hover:bg-[#1e293b]',
        className,
      )}
      {...props}
    >
      {label ?? children}
    </button>
  )
}
