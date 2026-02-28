import { useEffect, useMemo, useState } from 'react'
import Modal from './components/Modal'
import Contact from './sections/Contact'
import Faq from './sections/Faq'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Pricing, { type Plan } from './sections/Pricing'
import './App.scss'

type ContactValues = {
  name: string
  email: string
  message: string
}

type ContactErrors = Partial<ContactValues>

const initialContactValues: ContactValues = {
  name: '',
  email: '',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '399 TL / ay',
    info: 'Kisisel kullanim',
    features: ['1 proje', 'Temel destek', 'Haftalik rapor'],
  },
  {
    id: 'team',
    name: 'Team',
    price: '899 TL / ay',
    info: 'Kucuk ekipler',
    features: ['5 proje', 'Oncelikli destek', 'Gelismis raporlama'],
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Teklif al',
    info: 'Kurumsal cozum',
    features: ['Sinirsiz proje', 'Ozel SLA', 'Danismanlik'],
  },
]

function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Ad Soyad alani bos birakilamaz.'
  }

  if (!values.email.trim()) {
    errors.email = 'E-posta alani bos birakilamaz.'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Lutfen gecerli bir e-posta adresi gir.'
  }

  if (!values.message.trim()) {
    errors.message = 'Mesaj alani bos birakilamaz.'
  }

  return errors
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)

  const [contactValues, setContactValues] = useState<ContactValues>(initialContactValues)
  const [contactErrors, setContactErrors] = useState<ContactErrors>({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const modalTitle = useMemo(
    () => (selectedPlan ? `${selectedPlan.name} paketi secildi` : 'Bilgi penceresi'),
    [selectedPlan],
  )

  const handleContactChange = <K extends keyof ContactValues>(
    field: K,
    value: ContactValues[K],
  ) => {
    setContactValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }))

    setContactErrors((prevErrors) => ({
      ...prevErrors,
      [field]: undefined,
    }))

    setSubmitted(false)
  }

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const errors = validateContact(contactValues)
    setContactErrors(errors)

    if (Object.keys(errors).length) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setContactValues(initialContactValues)
  }

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Icerige atla
      </a>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))}
      />
      <main id="main-content">
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Features />
        <Pricing plans={plans} onSelectPlan={handleSelectPlan} />
        <Faq />
        <Contact
          values={contactValues}
          errors={contactErrors}
          submitted={submitted}
          onChange={handleContactChange}
          onSubmit={handleContactSubmit}
        />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} title={modalTitle} onClose={() => setIsModalOpen(false)}>
        <p>
          {selectedPlan
            ? `${selectedPlan.name} paketini secmeye hazirsin. Iletisim formunu doldurarak kayit surecini baslatabilirsin.`
            : 'Kisa urun tanitim landingi ve bilesen kutuphanesi hazir.'}
        </p>
      </Modal>
    </>
  )
}

export default App
