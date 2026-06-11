import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import targetIcon from "./assets/target.png";
import rocketIcon from './assets/shuttle.png'
import progressIcon from "./assets/progress.png";

gsap.registerPlugin(ScrollTrigger)

const stats = [
  {
    value: "45",
    suffix: "%",
    label: "Less Manual Work",
    note: "Automate repetitive tasks and focus on high-value creative work.",
    icon: "target",
  },
  {
    value: "99",
    suffix: "%",
    label: "Task Accuracy",
    note: "Minimize errors and improve workflow precision with AI automation.",
    icon: "progress",
  },
  {
    value: "82",
    suffix: "%",
    label: "Faster Content Delivery",
    note: "Generate reports, summaries, and content instantly using AI.",
    icon: "shuttle",
    highlighted: true,
  },
];

function StatIcon({ type, highlighted = false }) {
  const iconMap = {
    target: targetIcon,
    shuttle: rocketIcon,
    progress: progressIcon,
  };

  const background = highlighted ? "white" : "#ff4b24";
  const filterStyle = highlighted
    ? "brightness(0) saturate(100%) invert(40%) sepia(90%) saturate(600%) hue-rotate(340deg)"
    : "brightness(0) invert(1)";

  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-md"
      style={{ backgroundColor: background }}
    >
      <img
        src={iconMap[type]}
        alt=""
        aria-hidden="true"
        className="h-6 w-6"
        style={{ filter: filterStyle }}
      />
    </span>
  );
}

function StatCard({ stat }) {
  const fillColor = stat.highlighted ? "#ff4b24" : "#FFFFFF";
  const textColor = stat.highlighted ? "text-white" : "text-[#ff4b24]";

  return (
    <article
      className={`relative overflow-visible flex min-h-[280px] flex-col px-7 py-6 ${textColor} sm:min-h-[335px] sm:px-9 lg:min-h-[360px] lg:px-11`}
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 342 335"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter
            id={`stat-card-shadow-${stat.icon}`}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feDropShadow
              dx="0"
              dy="14"
              stdDeviation="14"
              floodColor="#000000"
              floodOpacity="0.14"
            />
          </filter>
        </defs>
        <path
          d="M16 0H258C266 0 274 3 280 9L333 60C339 66 342 74 342 82V319C342 328 335 335 326 335H82C74 335 66 332 60 326L9 278C3 272 0 264 0 256V16C0 7 7 0 16 0Z"
          fill={fillColor}
          filter={`url(#stat-card-shadow-${stat.icon})`}
        />
      </svg>

      <div className="relative z-10 flex h-full flex-col">
        <StatIcon type={stat.icon} highlighted={stat.highlighted} />

        <div className="mt-6 flex items-end">
          <span className="text-[64px] font-bold leading-none tracking-normal sm:text-[96px] lg:text-[118px]">
            {stat.value}
          </span>
          <span className="mb-2 ml-2 text-3xl font-bold leading-none tracking-normal sm:text-4xl lg:text-5xl">
            {stat.suffix}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-medium tracking-normal sm:text-xl lg:text-2xl">
          {stat.label}
        </h3>

        <p className={`mt-auto max-w-[190px] self-end text-right text-[10px] font-medium leading-snug ${
          stat.highlighted ? "text-white" : "text-[#ff4b24]"
        }`}>
          {stat.note}
        </p>
      </div>
    </article>
  );
}

export default function AutomationStatsSection() {
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
    <section className="px-5 py-16 sm:px-8 lg:px-14 lg:py-25">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div ref={headerRef} className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-80">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-normal text-[#090909] sm:text-4xl lg:text-[40px]">
            Work smarter with intelligent automation.
          </h2>
          <p className="max-w-md text-base font-bold leading-relaxed text-[#676767] lg:pt-7">
            Reduce repetitive work, improve productivity, and accelerate your
            workflow using modern AI-powered tools.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-9">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

      </div>
    </section>
  );
}