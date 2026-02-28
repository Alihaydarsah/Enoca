import Button from '../components/Button'
import Card from '../components/Card'
import './Pricing.scss'

export type Plan = {
  id: string
  name: string
  price: string
  info: string
  features: string[]
  highlighted?: boolean
}

type PricingProps = {
  plans: Plan[]
  onSelectPlan: (plan: Plan) => void
}

function Pricing({ plans, onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="pricing container" aria-labelledby="pricing-title">
      <h2 id="pricing-title" className="section-title">
        Fiyat Kartlari
      </h2>
      <p className="section-copy">Ihtiyaca gore baslangic, ekip ve kurumsal paket secenekleri.</p>
      <div className="pricing__grid">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            title={plan.name}
            subtitle={plan.info}
            highlighted={Boolean(plan.highlighted)}
            footer={<Button onClick={() => onSelectPlan(plan)}>Paketi sec</Button>}
          >
            <p className="pricing__price">{plan.price}</p>
            <ul className="pricing__list">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Pricing
