import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const plans = [
  {
    name: "FREE PLAN",
    price: "Free",
    features: [
      "Basic AI tools",
      "5 projects",
      "Community support",
      "Limited analytics",
    ],
    button: "Get Started",
  },
  {
    name: "PREMIUM PLAN",
    price: "$12",
    period: "Per month",
    features: [
      "Unlimited AI generations",
      "Advanced analytics",
      "Workflow automation",
      "Priority support",
      "Team collaboration",
    ],
    button: "Get the premium",
    featured: true,
  },
  {
    name: "TEAM PLAN",
    price: "$29",
    period: "Per month",
    features: [
      "Everything in Pro",
      "Shared workspaces",
      "Admin controls",
      "API access",
    ],
    button: "Get Started",
  },
];

function CheckIcon({ featured = false }) {
  return (
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
        featured ? "bg-white text-[#ff4b24]" : "bg-[#ff4b24] text-white"
      }`}
    >
      <svg className="h-2.5 w-2.5" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="m3 6.1 1.8 1.8L9 3.7"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}

function PricingCard({ plan }) {
  if (plan.featured) {
    return (
      <article className="relative z-10 flex min-h-[520px] flex-col rounded-xl bg-[#ff4b24] px-8 py-8 text-white shadow-[0_28px_70px_rgba(255,75,36,0.24)] lg:-mt-16">
        <p className="text-sm font-semibold tracking-normal text-white/90">
          {plan.name}
        </p>

        <div className="mt-9 flex items-end gap-3">
          <span className="text-6xl font-bold leading-none tracking-normal">
            {plan.price}
          </span>
          <span className="mb-2 text-xs font-bold">{plan.period}</span>
        </div>

        <div className="mt-9 h-px bg-white/15" />

        <ul className="mt-20 mb-10 space-y-6">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-4 text-sm font-medium">
              <CheckIcon featured />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="mt-auto h-14 rounded-full bg-white px-8 text-sm font-bold text-[#1c1c1c] shadow-sm transition hover:bg-[#f5f5f5]">
          {plan.button}
        </button>
      </article>
    );
  }

  return (
    <article className="flex min-h-[450px] flex-col rounded-xl bg-white px-8 py-8 text-[#ff4b24] shadow-[0_28px_70px_rgba(45,105,111,0.16)]">
      <p className="text-sm font-semibold tracking-normal">{plan.name}</p>

      <div  className="mt-9 flex items-end gap-3">
        <span className="text-6xl font-bold leading-none tracking-normal">
          {plan.price}
        </span>
        {plan.period ? (
          <span className="mb-2 text-xs font-bold">{plan.period}</span>
        ) : null}
      </div>

      <div className="mt-9 h-px bg-[#ff4b24]/15" />


      <ul className="mt-16 mb-10 space-y-6">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-4 text-sm font-medium">
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      

      <button className="mt-auto h-14 rounded-full bg-[#ff4b24] px-8 text-sm font-bold text-white shadow-sm transition hover:bg-[#e9431f]">
        {plan.button}
      </button>
    </article>
  );
}

export default function PricingSection() {

    const headerRef = useRef(null)
    const cardsRef = useRef(null)
  
    useEffect(() => {
      // Header fades in
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        }
      })
  
      // Cards stagger in
      gsap.from(cardsRef.current.querySelectorAll('article'), {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
        }
      })
    }, [])

  return (
    <section id="pricing" className="relative overflow-hidden bg-[#d2f3f4] px-5 py-16 text-[#2b696f] sm:px-8 lg:px-14 lg:py-20">
      <div
        className="absolute inset-x-0 bottom-0 h-[50%] bg-[#f5f5f5]"
        style={{ clipPath: "polygon(0 38%, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div ref={headerRef} className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-normal sm:text-5xl">
            Simple pricing for modern teams.
          </h2>

          <p className="mt-4 text-xl font-medium leading-relaxed sm:text-2xl">
            Choose the perfect plan for your workflow.
          </p>
        </div>

        <div ref={cardsRef} className="mt-24 grid items-end gap-8 md:grid-cols-3 lg:px-10">
          {plans.map((plan) => (
            <PricingCard key={`${plan.name}-${plan.price}`} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
