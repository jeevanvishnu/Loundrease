import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Time-Saving Solutions',
    desc: "We've streamlined the laundry process to make your life easier, freeing up your valuable time.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 0 1 0 20M12 2a10 10 0 0 0 0 20M2 12h20" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 3.5C8 3.5 10 8 10 12s-2 8.5-2 8.5M16 3.5c0 0-2 4.5-2 8.5s2 8.5 2 8.5" />
      </svg>
    ),
    title: 'Eco-Friendly Cleaning',
    desc: 'Environmentally safe products that are tough on stains yet gentle on the planet and your fabrics.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="12" cy="12" r="7" strokeDasharray="2 2" />
      </svg>
    ),
    title: 'Premium Quality Care',
    desc: "We use the best detergents and equipment to deliver a pristine, high-quality clean every time.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138Z" />
      </svg>
    ),
    title: 'Trusted Expertise',
    desc: 'Our reliable service is designed to deliver consistent results you can count on, every single order.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left column */}
          <div className="max-w-lg" data-reveal="slide-right">
            <Badge variant="secondary" className="mb-6 shadow-none text-sm font-bold tracking-wide">
              Why choose us
            </Badge>
            <h2 className="font-phudu text-4xl lg:text-[52px] font-black text-primary mb-6 leading-tight uppercase tracking-tight">
              Why LaundrEase is Your Best Choice
            </h2>
            <p className="text-base lg:text-lg text-tertiary mb-10 leading-relaxed">
              We combine expertise, eco-friendly practices, and a customer-first approach to deliver unmatched convenience and quality for every wash.
            </p>
            <Button variant="primary" size="lg" className="px-10 text-[15px] font-bold uppercase tracking-wide rounded-[14px]">
              Contact Us
            </Button>
          </div>

          {/* Right 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="bg-bg-light rounded-[28px] p-7 border border-transparent hover:border-[#d4e0df] transition-all hover:-translate-y-1 duration-300"
                data-reveal="slide-left"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm mb-5">
                  {reason.icon}
                </div>
                <h3 className="font-phudu text-lg font-black text-primary mb-2 uppercase leading-snug">
                  {reason.title}
                </h3>
                <p className="text-tertiary text-[14px] leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
