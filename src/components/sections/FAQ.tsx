import { useState } from 'react';
import { Badge } from '../ui/Badge';

const faqs = [
  {
    q: 'What laundry cleaning services do you provide?',
    a: 'We offer a comprehensive range of services including Wash & Fold, Dry Cleaning, Bedding & Linen Cleaning, Ironing, Alterations & Repairs, and Leather Cleaning.',
  },
  {
    q: 'Do you offer same-day laundry service?',
    a: 'Yes! We offer same-day and express services for urgent orders. Simply select the express option when scheduling your pickup, and we\'ll have your clothes back to you within the same day.',
  },
  {
    q: 'What types of fabrics can you handle?',
    a: 'We handle all types of fabrics including cotton, silk, wool, linen, denim, synthetic blends, and delicate fabrics. Our experts select the appropriate cleaning method for each item.',
  },
  {
    q: 'Do you provide pickup and delivery services?',
    a: 'Absolutely! We offer free pickup and delivery right to your doorstep. Simply schedule a pickup time that works for you through our website or app.',
  },
  {
    q: 'Are your cleaning products eco-friendly?',
    a: 'Yes, we are committed to sustainability. We use environmentally safe, biodegradable detergents and cleaning products that are tough on stains but gentle on the planet.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-bg-light py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-8" data-reveal="slide-right">
            <Badge variant="secondary" className="mb-5 text-sm font-bold tracking-wide shadow-none">
              FAQ's
            </Badge>
            <h2 className="font-phudu text-4xl lg:text-[48px] font-black text-primary mb-5 leading-tight uppercase tracking-tight">
              Quick Answers for Peace of Mind
            </h2>
            <p className="text-base lg:text-lg text-tertiary leading-relaxed max-w-md">
              Have questions? We've got answers! Below are some of the most commonly
              asked questions about our laundry services.
            </p>
          </div>

          {/* Right accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-[24px] overflow-hidden shadow-sm border transition-all duration-300 ${
                    isOpen ? 'border-secondary' : 'border-transparent hover:border-[#d4e0df]'
                  }`}
                  data-reveal="slide-left"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-6 pr-7 text-left"
                  >
                    <h4 className="text-[16px] font-bold text-primary font-inter pr-4 leading-snug">
                      {faq.q}
                    </h4>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-secondary rotate-45' : 'bg-bg-light'
                      }`}
                    >
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </button>
                  <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                    <p className="px-6 pb-6 text-tertiary text-[15px] leading-relaxed font-inter">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
