import { useState } from "react"
import { useRef, useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)


export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section
      className="relative flex min-h-[620px] sm:min-h-[820px] items-center justify-center overflow-hidden px-5 py-16 sm:px-8 lg:px-14"
      style={{
        backgroundImage: "url('/src/assets/Bg2.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative mx-auto w-full max-w-4xl mt-16 sm:mt-40 rounded-[28px] border border-white/75 bg-white/50 px-5 py-10 text-center shadow-[0_18px_55px_rgba(30,30,30,0.18)] backdrop-blur-md sm:px-12 sm:py-12 lg:px-20">
        
        <h2 className="mx-auto max-w-4xl text-2xl font-medium leading-tight tracking-normal text-[#111111] sm:text-4xl lg:text-[44px]">
          Stay Ahead with AI-Powered Productivity
        </h2>

        <p className="mx-auto mt-4 max-w-[400px] text-sm font-medium leading-snug text-[#161616] sm:text-base">
          Get productivity insights, updates, and AI news delivered directly to
          your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex flex-col gap-3 max-w-2xl rounded-2xl sm:rounded-full bg-white/80 p-3 shadow-[0_14px_35px_rgba(30,30,30,0.18)] ring-1 ring-black/[0.04] sm:flex-row sm:items-center"
        >
          <label className="flex min-h-12 flex-1 items-center gap-3 px-4 text-left">
            <svg
              className="h-5 w-5 shrink-0 text-[#9aa4ad]"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4.5 6.5h15v11h-15v-11Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
              <path
                d="m5 7 7 6 7-6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
            <span className="sr-only">Email address</span>
            <input
              className="w-full bg-transparent text-base font-medium text-[#242424] outline-none placeholder:text-[#8f99a3]"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button
            className="h-13 rounded-full bg-linear-to-r from-[#F99F4B] to-[#F03C1B] border border-[#F03C1B] px-8 text-base font-medium text-white shadow-[0_8px_22px_rgba(255,122,60,0.28)] hover:bg-none hover:bg-white hover:text-[#F03C1B] transition-all duration-200 cursor-pointer"
            type="submit"
          >
            {submitted ? "Subscribed ✓" : "Subscribe Now →"}
          </button>
        </form>

        <p className="mt-6 text-xs font-medium text-[#4f4f55] sm:text-sm">
          *We value your privacy. Unsubscribe anytime with one click.
        </p>
      </div>
    </section>
  )
}