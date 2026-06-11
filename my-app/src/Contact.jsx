export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#d2f3f4] px-5 py-16 sm:px-8 lg:px-14">
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] bg-[#f5f5f5]"
        style={{ clipPath: "polygon(0 28%, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-3xl px-6 py-6 text-center sm:px-12 lg:px-20 pt-10">
        <p className="text-[18px] font-bold text-[#ff4b24]">Contact Us</p>
        <h2 className="mx-auto mt-5 max-w-xl text-2xl font-bold leading-tight text-[#050505] sm:text-3xl">
          Let's build smarter experiences together.
        </h2>
        <p className="mx-auto mt-5 max-w-sm text-xs font-medium leading-tight text-[#2D696B]">
          Have questions, ideas, or partnership opportunities? Reach out to the
          Synora AI team and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="relative mx-auto max-w-[560px] rounded-xl bg-white px-8 py-8 shadow-[0_8px_22px_rgba(20,20,20,0.2)] ring-1 ring-black/[0.04] sm:px-14">
        <form className="mx-auto max-w-full text-left">
          <h3 className="text-2xl font-bold leading-tight text-[#272727]">
            Write us a message
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-[#585858]">Name</span>
              <input
                className="mt-2 h-14 w-full rounded-xl border border-[#b8b8b8] bg-white px-4 text-sm font-medium text-[#111111] outline-none placeholder:text-[#b2b2b2] focus:border-[#ff6230] focus:ring-2 focus:ring-[#ff6230]/20"
                type="text"
                placeholder="Enter your name..."
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-[#585858]">Email</span>
              <input
                className="mt-2 h-14 w-full rounded-xl border border-[#b8b8b8] bg-white px-4 text-sm font-medium text-[#111111] outline-none placeholder:text-[#b2b2b2] focus:border-[#ff6230] focus:ring-2 focus:ring-[#ff6230]/20"
                type="email"
                placeholder="Enter your email..."
              />
            </label>
          </div>

          <label className="mt-3 block">
            <span className="text-sm font-bold text-[#585858]">Reason for contact</span>
            <input
              className="mt-2 h-14 w-full rounded-xl border border-[#b8b8b8] bg-white px-4 text-sm font-medium text-[#111111] outline-none placeholder:text-[#b2b2b2] focus:border-[#ff6230] focus:ring-2 focus:ring-[#ff6230]/20"
              type="text"
              placeholder="Please specify"
            />
          </label>

          <label className="mt-3 block">
            <span className="text-sm font-bold text-[#585858]">Message</span>
            <textarea
              className="mt-2 min-h-24 w-full resize-none rounded-xl border border-[#b8b8b8] bg-white px-4 py-3 text-sm font-medium text-[#111111] outline-none placeholder:text-[#b2b2b2] focus:border-[#ff6230] focus:ring-2 focus:ring-[#ff6230]/20"
              placeholder="Write your message here"
            />
          </label>

          <label className="mt-2 flex items-center gap-3 text-xs font-medium text-[#222222]">
            <input
              className="h-5 w-5 rounded-full border border-[#a8a8a8] accent-[#ff5b2a]"
              type="checkbox"
            />
            <span>I agree to the privacy policy.</span>
          </label>

          <button
            className="mt-5 h-17 w-full rounded-full bg-gradient-to-r from-[#ff9d4a] to-[#ff4b24] border border-[#F03C1B] text-base font-bold text-white cursor-pointer hover:bg-none hover:bg-white hover:text-[#F03C1B] transition-all duration-200"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}