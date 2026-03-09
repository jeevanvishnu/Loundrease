export function CTA() {
  return (
    <section className="bg-bg-light py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-secondary rounded-[48px] overflow-hidden relative flex flex-col lg:flex-row items-center justify-between gap-0" data-reveal="zoom">

          {/* Left content */}
          <div className="relative z-10 px-10 py-14 lg:px-16 lg:py-16 max-w-xl" data-reveal="slide-right">
            <h2 className="font-phudu text-4xl lg:text-[52px] font-black text-primary mb-5 leading-tight uppercase tracking-tight">
              Exclusive Deals You Don't Want to Miss
            </h2>
            <p className="text-base text-primary/80 mb-8 font-inter leading-relaxed">
              Don't miss out on our exclusive deal! Get 25% off your first laundry service when you book today.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                'Convenient pick-up & delivery tailored to your schedule',
                'Eco-friendly detergents used for every wash',
                'Save time & enjoy a hassle-free service',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-primary font-bold text-[15px]">
                  <span className="w-6 h-6 rounded-full bg-primary text-secondary flex items-center justify-center text-sm font-bold shrink-0">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button className="h-[52px] rounded-[14px] bg-primary text-secondary font-bold uppercase tracking-widest text-[14px] px-10 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90">
              Schedule a Pickup
            </button>
          </div>

          {/* Right image */}
          <div className="relative w-full lg:w-[45%] h-[300px] lg:h-full self-stretch overflow-hidden" data-reveal="slide-left">
            <img
              src="https://images.unsplash.com/photo-1525450824786-227cbef70703?w=800&auto=format&fit=crop&q=80"
              alt="Laundry service"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay on left to blend with yellow */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-transparent lg:block hidden" />
          </div>

        </div>
      </div>
    </section>
  );
}
