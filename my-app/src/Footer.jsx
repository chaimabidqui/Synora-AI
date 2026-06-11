import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'


const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/#features", hash: true },
      { label: "Dashboard", to: "/dashboard" },
      { label: "Pricing", to: "/#pricing", hash: true },
      { label: "Integrations", to: "/integrations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Testimonials", to: "/#testimonials", hash: true },
      { label: "FAQ", to: "/#faq", hash: true },
      { label: "Documentation", to: "/docs" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Contact", to: "/contact" },
      { label: "Legal", to: "/legal" },
    ],
  },
]

const socialLinks = [
  {
    label: "LinkedIn",
    icon: (
      <path
        d="M6.2 9.4h3.1V19H6.2V9.4Zm1.5-4.6a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM11.1 9.4h3v1.3a3.3 3.3 0 0 1 2.9-1.6c2.1 0 3.7 1.4 3.7 4.4V19h-3.1v-5c0-1.4-.5-2.2-1.6-2.2-.9 0-1.4.6-1.7 1.2-.1.2-.1.5-.1.8V19h-3.1V9.4Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "X",
    icon: (
      <path
        d="M5 5h3.6l4.2 5.5L17.7 5H21l-6.6 7.4L21.3 21h-3.6l-4.8-6.1L7.5 21H4.2l7.1-8L5 5Zm2 1.7 11.5 12.7h.8L7.8 6.7H7Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Facebook",
    icon: (
      <path
        d="M13.7 21v-7.4h2.5l.4-2.9h-2.9V8.9c0-.8.2-1.4 1.4-1.4h1.6V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.1H8v2.9h2.6V21h3.1Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Instagram",
    icon: (
      <>
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.3" cy="7.7" r="1.1" fill="currentColor" />
      </>
    ),
  },
];


function SocialButton({ item }) {
  return (
    <a
      className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/85 text-[#df833d] shadow-[0_12px_28px_rgba(223,131,61,0.22)] ring-1 ring-white/70 transition hover:-translate-y-0.5 hover:text-[#ff4b24]"
      href="#"
      aria-label={item.label}
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {item.icon}
      </svg>
    </a>
  );
}

export default function FooterSection() {
  const navigate = useNavigate();
  return (
    <footer className="px-6 py-14 bg-white/80 text-[#171717]  sm:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_2.5fr_1.65fr] lg:gap-16">
          <div>
            <div>
              <span onClick={() => { navigate('/'); window.scrollTo(0, 0) }} className="flex items-center text-xl  text-[#F03C1B] cursor-pointer">
                  <img src={logo} alt="" className="w-18 h-18 -ml-5" />
                  Synora-AI</span>
            </div>

            <p className="mt-4 max-w-sm text-xl font-medium leading-snug text-[#151515]">
              Build smarter workflows with modern AI-powered productivity tools.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-2xl font-bold tracking-normal text-[#080808]">
                  {column.title}
                </h2>
                <ul className="mt-8 space-y-6">
  {column.links.map((link) => (
    <li key={link.label}>
      {link.hash ? (
        <HashLink
          smooth
          to={link.to}
          className="text-xl font-medium text-[#4d4d4d] transition hover:text-[#ff4b24]"
        >
          {link.label}
        </HashLink>
      ) : (
        
        <Link
          to={link.to}
          className="text-xl font-medium text-[#4d4d4d] transition hover:text-[#ff4b24]"
        >
          {link.label}
        </Link>
      )}
    </li>
  ))}
</ul>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-normal text-[#080808]">
              Stay Connected
            </h2>

            <div className="mt-8 flex justify-center gap-7 sm:justify-start">
              {socialLinks.map((item) => (
                <SocialButton key={item.label} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#d6d6d6] pt-8">
          <div className="flex flex-col gap-5 text-lg font-medium sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Synora AI. All rights reserved.</p>
            <div onClick={() => navigate('/PrivacyPolicy')}
            className="flex flex-wrap gap-x-3 gap-y-2">
              <a href="#" className="hover:text-[#ff4b24]">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#ff4b24]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
