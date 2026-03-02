import './Header.scss'

type HeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

function Header({ theme, onToggleTheme }: HeaderProps) {
  const isLight = theme === 'light'

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#hero">
          Enoca Mini Landing
        </a>
        <nav aria-label="Ana menü">
          <ul className="header__nav-list">
            <li>
              <a href="#features">Özellikler</a>
            </li>
            <li>
              <a href="#pricing">Fiyatlar</a>
            </li>
            <li>
              <a href="#faq">SSS</a>
            </li>
            <li>
              <a href="#contact">İletisim</a>
            </li>
          </ul>
        </nav>
        <button
          className="header__theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={isLight ? 'Dark moda gec' : 'Light moda gec'}
          title={isLight ? 'Dark moda gec' : 'Light moda gec'}
        >
          {isLight ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4.5" />
              <path d="M12 1.5v3M12 19.5v3M4.57 4.57l2.12 2.12M17.31 17.31l2.12 2.12M1.5 12h3M19.5 12h3M4.57 19.43l2.12-2.12M17.31 6.69l2.12-2.12" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

export default Header
