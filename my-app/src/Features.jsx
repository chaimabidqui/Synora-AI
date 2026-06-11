import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import shinesIcon from "./assets/shines.png";
import progressIcon from "./assets/progress.png";
import userIcon from "./assets/user.png";
import cloudIcon from "./assets/cloud.png";
import scururityIcon from "./assets/security.png";

gsap.registerPlugin(ScrollTrigger)

const features = [
  { title: "Smart AI Assistant", description: "Generate emails, summaries, blog posts, and ideas instantly with advanced AI.", icon: "sparkles" },
  { title: "Real-Time Analytics", description: "Track performance and visualize important metrics in real time.", icon: "target", featured: true },
  { title: "Workflow Automation", description: "Automate repetitive tasks and connect your tools effortlessly.", icon: "progress" },
  { title: "Team Collaboration", description: "Work together in shared AI workspaces designed for productivity.", icon: "user" },
  { title: "Fast Cloud Sync", description: "Access projects securely across all your devices with instant synchronization.", icon: "cloud" },
  { title: "Advanced Security", description: "Enterprise-grade security and encrypted infrastructure for maximum protection.", icon: "security" },
];

function FeatureIcon({ type, active = false }) {
  const iconMap = {
    sparkles: shinesIcon,
    target: "https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/outline/chart-bar.svg",
    progress: progressIcon,
    user: userIcon,
    cloud: cloudIcon,
    security: scururityIcon,
  };

  const filterWhite = "brightness(0) invert(1)";
  const filterOrange = "brightness(0) saturate(100%) invert(35%) sepia(99%) saturate(700%) hue-rotate(340deg) brightness(105%)";

  return (
    <span className={`flex h-10 w-10 items-center justify-center rounded-md ${active ? "bg-white" : "bg-[#ff4b24]"}`}>
      <img
        src={iconMap[type] ?? iconMap.target}
        alt=""
        aria-hidden="true"
        className="h-6 w-6"
        style={{ filter: active ? filterOrange : filterWhite }}
      />
    </span>
  );
}

function FeatureCard({ feature }) {
  if (feature.featured) {
    return (
      <article className="rounded-xl bg-[#ff4b24] p-8 sm:p-10 text-white shadow-[0_18px_45px_rgba(255,75,36,0.24)]">
        <FeatureIcon type={feature.icon} active />
        <h3 className="mt-4 text-xl sm:text-2xl font-medium">{feature.title}</h3>
        <p className="mt-4 max-w-[270px] text-sm font-normal leading-relaxed text-white/85">
          {feature.description}
        </p>
      </article>
    );
  }
  return (
    <article className="p-8 sm:p-10">
      <FeatureIcon type={feature.icon} />
      <h3 className="mt-5 text-lg sm:text-xl font-medium text-[#151515]">{feature.title}</h3>
      <p className="mt-4 max-w-[300px] text-sm font-semibold leading-relaxed text-[#171717]">
        {feature.description}
      </p>
    </article>
  );
}

export default function FeaturesSection() {
  const headerRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    // Header fades in
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 80%',
      }
    })

    // Cards stagger in one by one
    gsap.from(cardsRef.current.querySelectorAll('article'), {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      }
    })
  }, [])

  return (
    <section id="features" className="relative min-h-screen overflow-hidden bg-[#d2f3f4] px-5 py-10 pt-24 sm:pt-30 text-[#2b696f] sm:px-8 lg:px-14">
      <div
        className="absolute inset-x-0 bottom-0 h-[40%] bg-[#f5f5f5]"
        style={{ clipPath: "polygon(0 28%, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="mx-auto max-w-3xl text-center">
          <div className="text-2xl sm:text-3xl font-medium mb-3">Powerful Features</div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-normal">
            Everything you need to build faster and smarter.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-relaxed text-[#2d6d73]/85">
            From AI-generated content to advanced workflow automation, Synora AI
            combines powerful tools into one seamless platform.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="mt-5 rounded-2xl bg-white px-4 py-8 shadow-sm sm:px-8 sm:py-12 lg:px-10">
          <div className="grid gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={`${feature.title}-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}