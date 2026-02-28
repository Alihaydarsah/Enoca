import { useEffect, useRef } from 'react'
import Button from './Button'
import './Modal.scss'

type ModalProps = {
  isOpen: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
}

function Modal({ isOpen, title, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const dialog = dialogRef.current
    if (!dialog) {
      return
    }

    const firstFocusable = dialog.querySelector<HTMLElement>(
      'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
    )
    firstFocusable?.focus()

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        return
      }

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])',
        ),
      )

      if (!focusable.length) {
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    dialog.addEventListener('keydown', handleTab)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      dialog.removeEventListener('keydown', handleTab)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="modal" role="presentation" onClick={onClose}>
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal__header">
          <h2 id="modal-title" className="modal__title">
            {title}
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Kapat
          </Button>
        </header>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
