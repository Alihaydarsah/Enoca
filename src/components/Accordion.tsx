import { useState } from 'react'
import './Accordion.scss'

type AccordionItem = {
  id: string
  title: string
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
}

function Accordion({ items }: AccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null)

  const toggle = (id: string) => {
    setActiveId((prevId) => (prevId === id ? null : id))
  }

  const onHeaderKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      return
    }

    event.preventDefault()

    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>('.accordion__trigger'),
    )

    if (!buttons.length) {
      return
    }

    if (event.key === 'Home') {
      buttons[0].focus()
      return
    }

    if (event.key === 'End') {
      buttons[buttons.length - 1].focus()
      return
    }

    const direction = event.key === 'ArrowDown' ? 1 : -1
    const nextIndex = (currentIndex + direction + buttons.length) % buttons.length
    buttons[nextIndex].focus()
  }

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = activeId === item.id

        return (
          <section className="accordion__item" key={item.id}>
            <h3 className="accordion__heading">
              <button
                className="accordion__trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${item.id}-content`}
                id={`${item.id}-trigger`}
                onClick={() => toggle(item.id)}
                onKeyDown={(event) => onHeaderKeyDown(event, index)}
              >
                {item.title}
                <span aria-hidden="true" className="accordion__icon">
                  {isOpen ? '-' : '+'}
                </span>
              </button>
            </h3>
            <div
              id={`${item.id}-content`}
              className={`accordion__content ${isOpen ? 'accordion__content--open' : ''}`}
              role="region"
              aria-labelledby={`${item.id}-trigger`}
              hidden={!isOpen}
            >
              <p>{item.content}</p>
            </div>
          </section>
        )
      })}
    </div>
  )
}

export default Accordion
