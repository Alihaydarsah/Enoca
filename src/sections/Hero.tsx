import Button from '../components/Button'
import './Hero.scss'

type HeroProps = {
  onOpenModal: () => void
}

function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="hero" className="hero container" aria-labelledby="hero-title">
      <div>
        <p className="hero__tag">4 is gununde teslime uygun mini landing yapisi</p>
        <h1 id="hero-title" className="hero__title">
          Modern, erisilebilir ve yeniden kullanilabilir React arayuzu
        </h1>
        <p className="hero__copy">
          Hero, Ozellikler, Fiyat, SSS ve Iletisim bolumlerini tek sayfada topladik.
          Bilesen kutuphanesi ile ayni parcalari farkli yerlerde tekrar kullanabiliyoruz.
        </p>
        <div className="hero__actions">
          <Button size="lg" onClick={onOpenModal}>
            Hemen dene
          </Button>
          <a className="hero__link" href="#pricing">
            Paketleri gor
          </a>
        </div>
      </div>
      <figure className="hero__media">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1080&q=80"
          alt="Kod editoru ekrani"
          loading="lazy"
          width="1080"
          height="720"
        />
      </figure>
    </section>
  )
}

export default Hero
