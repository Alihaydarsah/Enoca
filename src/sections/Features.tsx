import Card from '../components/Card'
import './Features.scss'

const features = [
  {
    title: 'Semantik HTML',
    subtitle: 'a11y odakli',
    content:
      'Header, main, section ve footer yapisi ile ekran okuyucu uyumlulugu korunur.',
  },
  {
    title: 'Bilesen Kutuphanesi',
    subtitle: '5 cekirdek bilesen',
    content: 'Button, Input, Card, Modal ve Accordion ayri dosyalarda tekrar kullanilir.',
  },
  {
    title: 'Responsive Mimari',
    subtitle: '3 breakpoint',
    content: '640, 641-1024 ve 1025+ araliklarinda grid/flex duzeni sorunsuz calisir.',
  },
]

function Features() {
  return (
    <section id="features" className="features container" aria-labelledby="features-title">
      <h2 id="features-title" className="section-title">
        Ozellikler
      </h2>
      <p className="section-copy">
        Projede kurallar dokumanina uygun olarak sade ama genisletilebilir bir temel olusturduk.
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
