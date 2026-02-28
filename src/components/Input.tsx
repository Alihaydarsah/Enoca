import './Input.scss'

type InputProps = {
  id: string
  label: string
  value: string
  type?: 'text' | 'email'
  placeholder?: string
  error?: string
  required?: boolean
  onChange: (value: string) => void
}

function Input({
  id,
  label,
  value,
  type = 'text',
  placeholder,
  error,
  required = false,
  onChange,
}: InputProps) {
  const errorId = `${id}-error`

  return (
    <div className="input-field">
      <label className="input-field__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={`input-field__control ${error ? 'input-field__control--error' : ''}`}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={errorId} className="input-field__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default Input
