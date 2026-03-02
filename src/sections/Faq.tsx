import Accordion from '../components/Accordion'
import './Faq.scss'

const faqItems = [
  {
    id: 'faq-1',
    title: 'Bu yapı hangi teknoloji ile geliştirildi?',
    content: 'Vite + React + TypeScript ve SCSS kullanıldı. Harici UI kütüphanesi kullanılmadı.',
  },
  {
    id: 'faq-2',
    title: 'Tema geçişi nasıl çalışıyor?',
    content: 'Light ve dark mod CSS değişkenleri ile yönetiliyor, bir toggle butonu ile değişiyor.',
  },
  {
    id: 'faq-3',
    title: 'Form validasyonu var mı?',
    content: 'Evet. Boş alan ve e-posta format kontrolleri sadece React durum yönetimi ile yapılıyor.',
  },
]

function Faq() {
  return (
    <section id="faq" className="faq container" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title">
        Sık Sorulan Sorular
      </h2>
      <p className="section-copy">Accordion bileşeni klavye ile de kontrol edilebilir.</p>
      <div className="faq__content">
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}

export default Faq
