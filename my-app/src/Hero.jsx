import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import heroBg from './assets/heroBg.png'
import icon from './assets/rocket.png'
import iconcolor from './assets/shuttle.png'

export default function Hero() {
  const navigate = useNavigate()
  const subtitleRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    gsap.from(
      [subtitleRef.current, titleRef.current, descRef.current, btnRef.current],
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.2,
      }
    )
  }, [])

  const background = {
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }

  return (
    <section
      style={background}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24"
    >
      <h1 ref={subtitleRef} className="text-lg sm:text-xl md:text-3xl font-normal leading-tight mb-5 max-w-2xl text-[#F99F4B]">
        AI-Powered Productivity Platform
      </h1>

      <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-5 max-w-6xl text-[#2D696B]">
        Build smarter workflows with AI in seconds.
      </h1>

      <p ref={descRef} className="text-base sm:text-lg md:text-xl text-[#2D696B] max-w-3xl leading-relaxed mb-8">
        Synora-AI helps teams, creators, and developers automate tasks, generate
        content, and make faster decisions — all from one intelligent workspace.
      </p>

      <div ref={btnRef} className="flex items-center gap-3 flex-wrap justify-center mb-8">
        <button
          onClick={() => navigate('/contact')}
          className="group flex items-center gap-2 px-8 h-12 bg-gradient-to-r from-[#F99F4B] to-[#F03C1B] border border-[#F03C1B] text-white rounded-full font-medium cursor-pointer
    hover:bg-none hover:bg-white hover:text-[#F03C1B] transition-all duration-200"
        >
          <img src={icon} alt="" className="w-6 h-6 block group-hover:hidden" />
          <img src={iconcolor} alt="" className="w-6 h-6 hidden group-hover:block" />
          Get started free
        </button>
      </div>
    </section>
  )
}