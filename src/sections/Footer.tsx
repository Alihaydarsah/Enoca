import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>(c) 2026 Enoca Mini Landing</p>
        <a href="#hero" className="footer__top-link" aria-label="Basa don">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
