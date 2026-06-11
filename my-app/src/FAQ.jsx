import { useState } from "react";

const faqs = [
  {
    question: "Is Synora-AI free?",
    answer: "Yes. You can start with the free plan and upgrade anytime.",
  },
  {
    question: "Do I need technical skills?",
    answer: "No. Synora-AI is designed so non-technical teams can create, automate, and manage workflows easily.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. You can cancel or change your plan whenever your workflow changes.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. Your workspace data is protected with modern security practices and controlled access.",
  },
  {
    question: "Does Synora-AI support teams?",
    answer: "Yes. Team plans include shared workspaces, collaboration tools, and admin controls.",
  },
];

function FaqIcon({ open }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff4b24] text-white">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d={open ? "M7 7l10 10M17 7 7 17" : "M12 5v14M5 12h14"}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.5"
        />
      </svg>
    </span>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="px-5 py-12 sm:px-8 lg:px-14 lg:py-16 lg:pt-40">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-3xl font-bold text-[#F03C1B]">FAQ</p>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-[#050505] sm:text-4xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <article
                key={faq.question}
                className={`rounded-2xl bg-white px-8 shadow-sm transition-all duration-300 sm:px-10 ${
                  open ? "py-8" : "py-5"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between gap-8 text-left"
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span className="text-xl font-medium text-[#111111] sm:text-2xl">
                    {faq.question}
                  </span>
                  <FaqIcon open={open} />
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    open ? "grid-rows-[1fr] pt-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="max-w-3xl text-base font-medium leading-relaxed text-[#777777] sm:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}