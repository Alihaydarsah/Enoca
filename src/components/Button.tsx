import './Button.scss'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  disabled?: boolean
  ariaControls?: string
  ariaExpanded?: boolean
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled = false,
  ariaControls,
  ariaExpanded,
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant} button--${size}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    >
      {children}
    </button>
  )
}

export default Button
