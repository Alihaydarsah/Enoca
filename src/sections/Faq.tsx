import Accordion from '../components/Accordion'
import './Faq.scss'

const faqItems = [
  {
    id: 'faq-1',
    title: 'Bu yapi hangi teknoloji ile gelistirildi?',
    content: 'Vite + React + TypeScript ve SCSS kullanildi. Harici UI kutuphanesi kullanilmadi.',
  },
  {
    id: 'faq-2',
    title: 'Tema gecisi nasil calisiyor?',
    content: 'Light ve dark mod CSS degiskenleri ile yonetiliyor, bir toggle butonu ile degisiyor.',
  },
  {
    id: 'faq-3',
    title: 'Form validasyonu var mi?',
    content: 'Evet. Bos alan ve e-posta format kontrolleri sadece React durum yonetimi ile yapiliyor.',
  },
]

function Faq() {
  return (
    <section id="faq" className="faq container" aria-labelledby="faq-title">
      <h2 id="faq-title" className="section-title">
        Sik Sorulan Sorular
      </h2>
      <p className="section-copy">Accordion bileseni klavye ile de kontrol edilebilir.</p>
      <div className="faq__content">
        <Accordion items={faqItems} />
      </div>
    </section>
  )
}

export default Faq
