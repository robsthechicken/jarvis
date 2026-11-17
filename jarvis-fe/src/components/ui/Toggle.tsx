import toggleOnSvg from '@/assets/figma/toggle-on.svg'
import toggleOffSvg from '@/assets/figma/toggle-off.svg'
import { cn } from '@/utils/cn'

interface ToggleProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
}

export function Toggle({ checked = true, onChange, className }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange?.(!checked)}
      className={cn('relative h-[30px] w-[52px] shrink-0 cursor-pointer', className)}
    >
      <img
        alt=""
        src={checked ? toggleOnSvg : toggleOffSvg}
        className="block h-[30px] w-[52px]"
      />
    </button>
  )
}
