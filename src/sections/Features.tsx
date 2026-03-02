import Card from '../components/Card'
import './Features.scss'

const features = [
  {
    title: 'Semantik HTML',
    subtitle: 'a11y odaklı',
    content:
      'Header, main, section ve footer yapısı ile ekran okuyucu uyumluluğu korunur.',
  },
  {
    title: 'Bileşen Kütüphanesi',
    subtitle: '5 çekirdek bileşen',
    content: 'Button, Input, Card, Modal ve Accordion ayrı dosyalarda tekrar kullanılır.',
  },
  {
    title: 'Responsive Mimari',
    subtitle: '3 breakpoint',
    content: '640, 641-1024 ve 1025+ aralıklarında grid/flex düzeni sorunsuz çalışır.',
  },
]

function Features() {
  return (
    <section id="features" className="features container" aria-labelledby="features-title">
      <h2 id="features-title" className="section-title">
        Özellikler
      </h2>
      <p className="section-copy">
        Projede kurallara uygun olarak sade ama genişletilebilir bir temel oluşturdum.
      </p>
      <div className="features__grid">
        {features.map((feature) => (
          <Card key={feature.title} title={feature.title} subtitle={feature.subtitle}>
            <p>{feature.content}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Features
