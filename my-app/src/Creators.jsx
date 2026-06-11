import dashboard from "./assets/dashboard.png";

export default function Creators() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-14 lg:py-40">
      <div className="flex flex-col lg:flex-row mx-auto max-w-7xl items-center gap-12 lg:gap-24">
        
        {/* Dashboard image */}
        <div className="relative w-full max-w-[650px] overflow-hidden rounded-[30px] bg-[#ff4b24] p-0 pt-7 pl-8 shadow-sm sm:pt-8 sm:pl-9 mx-auto lg:mx-0">
          <div className="overflow-hidden rounded-tl-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
            <img
              src={dashboard}
              alt="Synora-AI dashboard"
              className="h-[220px] w-full object-cover object-left-top sm:h-[300px] lg:h-[390px]"
            />
          </div>
        </div>

        {/* Text */}
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <h2 className="text-2xl font-bold leading-tight tracking-normal text-[#111111] sm:text-3xl lg:text-[42px]">
            Built for creators, startups, and modern teams.
          </h2>
          <p className="mt-6 text-base font-medium leading-relaxed text-[#666166] sm:text-xl lg:text-2xl">
            Manage projects, monitor analytics, and streamline workflows through
            a clean and intuitive dashboard experience.
          </p>
        </div>

      </div>
    </section>
  );
}