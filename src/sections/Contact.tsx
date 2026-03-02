import Button from '../components/Button'
import Input from '../components/Input'
import './Contact.scss'

type ContactValues = {
  name: string
  email: string
  message: string
}

type ContactErrors = Partial<ContactValues>

type ContactProps = {
  values: ContactValues
  errors: ContactErrors
  submitted: boolean
  onChange: <K extends keyof ContactValues>(field: K, value: ContactValues[K]) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

function Contact({ values, errors, submitted, onChange, onSubmit }: ContactProps) {
  return (
    <section id="contact" className="contact container" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title">
        Iletisim
      </h2>
      <p className="section-copy">Form alanlarını doldurup bize ulaşabilirsiniz.</p>
      <form className="contact__form" onSubmit={onSubmit} noValidate>
        <Input
          id="name"
          label="Ad Soyad"
          value={values.name}
          placeholder="Örnek: Ali Haydar Şah"
          error={errors.name}
          required
          onChange={(value) => onChange('name', value)}
        />
        <Input
          id="email"
          label="E-posta"
          type="email"
          value={values.email}
          placeholder="ornek@mail.com"
          error={errors.email}
          required
          onChange={(value) => onChange('email', value)}
        />
        <div className="contact__textarea-group">
          <label htmlFor="message" className="contact__label">
            Mesaj
          </label>
          <textarea
            id="message"
            className={`contact__textarea ${errors.message ? 'contact__textarea--error' : ''}`}
            value={values.message}
            placeholder="Kısa bir mesaj yaz..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            onChange={(event) => onChange('message', event.target.value)}
            required
          />
          {errors.message ? (
            <p id="message-error" className="contact__error" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
        <div className="contact__actions">
          <Button type="submit" size="lg">
            Gonder
          </Button>
          {submitted ? (
            <p className="contact__success" role="status">
              Form başarıyla gönderildi.
            </p>
          ) : null}
        </div>
      </form>
    </section>
  )
}

export default Contact
