import { Badge } from '../ui/Badge';

const steps = [
  {
    step: 'STEP 01',
    title: 'Schedule Your Pickup',
    text: 'Easily book your laundry pickup online or by phone at your convenience.',
  },
  {
    step: 'STEP 02',
    title: 'We Handle Cleaning',
    text: 'Our laundry experts using clean and fresh detergents for care your clothes.',
  },
  {
    step: 'STEP 03',
    title: 'Fresh, Clean Clothes',
    text: 'Delivered laundry to your doorstep, fresh, perfectly folded, and ready to enjoy wear.',
  },
];

export function Process() {
  return (
    <section className="bg-white py-0 font-inter overflow-hidden">

      {/* Top: Badge & Heading */}
      <div className="pt-20 lg:pt-28 pb-10 text-center px-4 sm:px-6 lg:px-8" data-reveal>
        <div className="container mx-auto max-w-7xl">
          <Badge variant="secondary" className="mb-6 mx-auto text-sm font-bold tracking-wide shadow-none">
            How it works
          </Badge>
          <h2 className="font-phudu text-4xl lg:text-[56px] font-black text-primary leading-[1.05] uppercase tracking-tight max-w-2xl mx-auto">
            Laundry Made Simple in 3 Easy Steps
          </h2>
          <p className="mt-5 text-base lg:text-lg text-tertiary font-inter max-w-xl mx-auto leading-relaxed">
            We've streamlined the laundry process to make your life easier. Here's how it works
          </p>
        </div>
      </div>

      {/* Big Image Banner */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mb-10" data-reveal="zoom">
        <div className="container mx-auto max-w-7xl">
          <div className="w-full rounded-[32px] overflow-hidden h-[220px] sm:h-[300px] lg:h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&auto=format&fit=crop&q=80"
              alt="Laundry room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 3-step cards row */}
      <div className="pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((feature, index) => (
              <div
                key={index}
                className="bg-bg-light rounded-[32px] p-8 lg:p-10 flex flex-col group hover:-translate-y-1 transition-transform duration-300"
                data-reveal
              >
                <div className="mb-8">
                  <Badge variant="secondary" className="text-sm font-bold shadow-none uppercase tracking-widest">
                    {feature.step}
                  </Badge>
                </div>
                <h3 className="text-xl lg:text-2xl font-black font-phudu text-primary mb-3 leading-snug uppercase">
                  {feature.title}
                </h3>
                <p className="text-tertiary font-inter text-[15px] leading-relaxed">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
