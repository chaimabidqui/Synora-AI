import { useRef, useEffect } from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";


gsap.registerPlugin(ScrollTrigger)
const avatarMap = { img1, img2, img3 };

const testimonials = [
  {
    name: "Agnes Remi",
    handle: "@Remi",
    body: "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!",
    avatar: "img1",
  },
  {
    name: "Sarah Johnson",
    handle: "@SarahJ",
    body: "Synora-AI replaced multiple tools I used daily. The interface is smooth, modern, and incredibly intuitive.",
    avatar: "img2",
  },
  {
    name: "Ahmed Khan",
    handle: "@AhmedK",
    body: "Excellent UI, fast AI responses, and powerful automation features. My workflow improved immediately.",
    avatar: "img3",
  },
  {
    name: "Lina Martinez",
    handle: "@Martinez",
    body: "Perfect for content generation and task management. It saves me hours every single week.",
    avatar: "img3",
  },
  {
    name: "Agnes Remi",
    handle: "@Remi",
    body: "Dico is finally addressing a long time problem we had when building UIs. It's ease of use and workflow seems really intuitive. Promising!",
    avatar: "img1",
  },
  {
    name: "Ahmed Khan",
    handle: "@AhmedK",
    body: "Excellent UI, fast AI responses, and powerful automation features. My workflow improved immediately.",
    avatar: "img2",
  },
];

function Avatar({ avatar, name }) {
  return (
    <span className="relative flex h-9 w-9 shrink-0">
      <img
        src={avatarMap[avatar]}
        alt={name}
        className="h-9 w-9 rounded-full object-cover"
      />
      <span className="absolute -right-0.5 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#ff4b24]" />
    </span>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="min-h-[168px] rounded-[22px] bg-white/95 p-5 ring-1 ring-black/[0.03]">
      <div className="flex items-center gap-3">
        <Avatar avatar={testimonial.avatar} name={testimonial.name} />
        <div>
          <h3 className="text-base font-bold leading-tight text-[#141414]">
            {testimonial.name}
          </h3>
          <p className="text-xs font-medium leading-tight text-[#8e8e8e]">
            {testimonial.handle}
          </p>
        </div>
      </div>
      <p className="mt-5 text-[13px] font-bold leading-relaxed text-[#171717]">
        {testimonial.body}
      </p>
    </article>
  );
}

function TestimonialColumn({ items, reverse = false, speed = 0.5 }) {
  const wrapperRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const frameId = requestAnimationFrame(() => {
      const halfHeight = el.scrollHeight / 2;
      if (reverse) posRef.current = halfHeight;

      const tick = () => {
        if (!pausedRef.current) {
          if (reverse) {
            posRef.current -= speed;
            if (posRef.current <= 0) posRef.current = halfHeight;
          } else {
            posRef.current += speed;
            if (posRef.current >= halfHeight) posRef.current = 0;
          }
          el.style.transform = `translate3d(0, -${posRef.current}px, 0)`;
        }
        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(frameId);
      cancelAnimationFrame(rafRef.current);
    };
  }, [reverse, speed]);

  return (
    <div
      className="h-[350px] sm:h-[470px] overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        ref={wrapperRef}
        className="flex flex-col gap-7"
        style={{ willChange: "transform" }}
      >
        {[...items, ...items].map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.avatar}-${index}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {

  
  const leftColumn = testimonials.slice(0, 3);
  const rightColumn = testimonials.slice(3);

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
    <section
      id="testimonials"
      className="px-5 py-16 sm:px-8 lg:px-14 lg:py-20 lg:pt-40"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white px-7 py-12 sm:px-10 lg:px-12 lg:py-30">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:gap-16">

          {/* Header */}
          <div ref={headerRef} className="pt-4">
            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-normal text-[#080808] sm:text-4xl lg:text-5xl">
              What our clients say
            </h2>
            <p className="mt-5 max-w-md text-sm font-medium leading-snug text-[#666666] sm:text-base lg:text-lg">
              Thousands of professionals rely on
              <span className="text-[#F03C1B]"> Synora AI</span> to streamline
              workflows, boost productivity, and scale faster with intelligent
              automation.
            </p>
          </div>

          {/* Testimonial columns */}
          <div ref={cardsRef} className="relative grid gap-7 grid-cols-1 sm:grid-cols-2">
            <TestimonialColumn items={leftColumn} speed={0.4} />
            {/* Hide second column on mobile */}
            <div className="hidden sm:block">
              <TestimonialColumn items={rightColumn} reverse speed={0.3} />
            </div>

            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-white/0"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-white/0"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </section>
  );
}