import Button from '../components/Button'
import './Hero.scss'

type HeroProps = {
  onOpenModal: () => void
}

function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="hero" className="hero container" aria-labelledby="hero-title">
      <div className="hero__banner">
        <div className="hero__overlay">
          <p className="hero__tag">Enoca Front End</p>
          <h1 id="hero-title" className="hero__title">
            Modern, erişilebilir ve yeniden kullanılabilir React arayüzü
          </h1>
          <p className="hero__copy">
            Hero, Özellikler, Fiyat, SSS ve İletişim bölümlerini tek sayfada topladım.
            Bileşen kütüphanesi ile aynı parçaları farklı yerlerde tekrar kullanabiliyoruz.
          </p>
          <div className="hero__actions">
            <Button size="lg" onClick={onOpenModal}>
              Hemen dene
            </Button>
            <a className="hero__link" href="#pricing">
              Paketleri gör
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
