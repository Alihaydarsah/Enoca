import Button from '../components/Button'
import './Hero.scss'

type HeroProps = {
  onOpenModal: () => void
}

function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="hero" className="hero container" aria-labelledby="hero-title">
      <div>
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
      <figure className="hero__media">
        <img
          src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80"
          alt="Modern calisma ortami ve bilgisayar"
          loading="lazy"
          width="900"
          height="600"
        />
      </figure>
    </section>
  )
}

export default Hero
