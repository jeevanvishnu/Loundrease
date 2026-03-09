import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 7, suffix: 'M', label: 'Happy customers' },
  { value: 98, suffix: '%', label: 'Customer satisfaction' },
  { value: 64, suffix: '+', label: 'Laundry machines' },
  { value: 12, suffix: '+', label: 'Years of experience' },
];

function AnimatedStat({
  target,
  suffix,
  label,
  start,
}: {
  target: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    let startTime = 0;
    const duration = 1300;

    const tick = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return (
    <div className="flex flex-col items-center">
      <span className="font-phudu text-5xl font-black tracking-tight text-white lg:text-6xl">
        {current}
        {suffix}
      </span>
      <span className="mt-2 text-sm font-medium text-[#8ab5b2]">{label}</span>
    </div>
  );
}

export function Stats() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="overflow-hidden bg-bg-light py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-6 pb-16 text-center lg:pb-20">
        <h2
          className="mx-auto max-w-[920px] font-phudu text-5xl font-extrabold uppercase leading-[1.1] tracking-tight text-primary lg:text-[64px]"
          data-reveal
        >
          We combine experience, technology, and passion to simplify your laundry
          needs and exceed your expectations.
        </h2>
      </div>

      <div className="bg-primary py-8" data-reveal>
        <div className="relative overflow-hidden border-y border-white/10 py-4">
          <div className="animate-ticker flex items-center gap-12 text-white">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-12 whitespace-nowrap font-phudu text-xl font-bold uppercase tracking-wide lg:text-2xl"
              >
                <span>We combine experience, technology, and passion</span>
                <span className="text-secondary text-3xl">*</span>
                <span>To simplify your laundry needs</span>
                <span className="text-secondary text-3xl">*</span>
                <span>And exceed your expectations</span>
                <span className="text-secondary text-3xl">*</span>
              </span>
            ))}
          </div>
        </div>

        <div ref={statsRef} className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {stats.map((item) => (
            <AnimatedStat
              key={item.label}
              target={item.value}
              suffix={item.suffix}
              label={item.label}
              start={startCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

