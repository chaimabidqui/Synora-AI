import { useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'

export default function ComingSoon() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#d2f3f4]">
      
      <span onClick={() => { navigate('/'); window.scrollTo(0, 0) }}
        className="flex items-center gap-2 text-xl text-[#F03C1B] cursor-pointer">
        <img src={logo} alt="" className="w-10 h-10" />
        Synora-AI
      </span>

      <h1 className="text-8xl sm:text-9xl font-bold text-[#2D696B] mb-6">
        Coming Soon
      </h1>

      <p className="text-lg sm:text-xl text-[#2D696B]/80 max-w-md mb-10">
        We're working hard on this page. Stay tuned!
      </p>

      <button
        onClick={() => { navigate('/'); window.scrollTo(0, 0) }}
        className="px-8 h-12  bg-gradient-to-r from-[#F99F4B] to-[#F03C1B] border border-[#F03C1B] text-white rounded-full font-medium cursor-pointer hover:bg-none hover:bg-white hover:text-[#F03C1B] transition-all duration-200"
      >
        Back to Home
      </button>

    </div>
  )
}