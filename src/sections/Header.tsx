import Button from '../components/Button'
import './Header.scss'

type HeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#hero">
          Enoca Mini Landing
        </a>
        <nav aria-label="Ana menu">
          <ul className="header__nav-list">
            <li>
              <a href="#features">Ozellikler</a>
            </li>
            <li>
              <a href="#pricing">Fiyatlar</a>
            </li>
            <li>
              <a href="#faq">SSS</a>
            </li>
            <li>
              <a href="#contact">Iletisim</a>
            </li>
          </ul>
        </nav>
        <Button variant="secondary" size="sm" onClick={onToggleTheme}>
          {theme === 'light' ? 'Dark moda gec' : 'Light moda gec'}
        </Button>
      </div>
    </header>
  )
}

export default Header
