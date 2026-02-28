import './Card.scss'

type CardProps = {
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
  highlighted?: boolean
}

function Card({ title, subtitle, children, footer, highlighted = false }: CardProps) {
  return (
    <article className={`card ${highlighted ? 'card--highlighted' : ''}`}>
      <header className="card__header">
        <h3 className="card__title">{title}</h3>
        {subtitle ? <p className="card__subtitle">{subtitle}</p> : null}
      </header>
      <div className="card__body">{children}</div>
      {footer ? <footer className="card__footer">{footer}</footer> : null}
    </article>
  )
}

export default Card
