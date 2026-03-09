import { Badge } from '../ui/Badge';

const reviews = [
  {
    text: "LaundrEase has completely transformed how I handle laundry. The pickup and delivery is seamless, clothes come back perfectly clean and folded. Absolutely love the service!",
    name: 'Jacob Jones',
    role: 'Small Business Owner',
    stars: 5,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    text: "The service allows easy scheduling to match my busy needs. I can adjust pickup times without much hassle, making it adaptable for businesses of all sizes.",
    name: 'Guy Hawkins',
    role: 'Marketing Manager',
    stars: 5,
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  },
  {
    text: "I have been using LaundrEase for 6 months and I am beyond satisfied. Same-day service, careful handling of delicate fabrics. Highly recommend to anyone with a busy lifestyle!",
    name: 'Jenny Wilson',
    role: 'Freelance Designer',
    stars: 5,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    text: "Outstanding quality and reliability. My suits come back looking freshly pressed every single time. The staff is professional and the pricing is very reasonable.",
    name: 'Robert Fox',
    role: 'Corporate Executive',
    stars: 5,
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    text: "As a mom of three, LaundrEase has been a lifesaver. The bedding and linen service is exceptional — everything smells fresh and is neatly packaged. 10 out of 10!",
    name: 'Emily Carter',
    role: 'Stay-at-home Parent',
    stars: 5,
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    text: "Tried many laundry services but LaundrEase is by far the best. The app is intuitive, and the clothes are always returned on time and in perfect condition.",
    name: 'Mark Thompson',
    role: 'Software Engineer',
    stars: 5,
    avatar: 'https://randomuser.me/api/portraits/men/58.jpg',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-secondary text-xl">&#9733;</span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-primary py-20 lg:py-28 font-inter overflow-hidden" data-reveal>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-12" data-reveal>
        <div className="text-center">
          <Badge variant="secondary" className="mb-5 text-sm font-bold tracking-wide shadow-none">
            Testimonials
          </Badge>
          <h2 className="font-phudu text-4xl lg:text-[52px] font-black text-white leading-tight uppercase tracking-tight max-w-3xl mx-auto">
            Trusted by Thousands, Loved by Many
          </h2>
        </div>
      </div>

      {/* Marquee row */}
      <div className="relative overflow-hidden">
        <div className="animate-marquee gap-6">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-[28px] p-8 w-[360px] shrink-0 mx-3 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
              style={{ minHeight: '220px' }}
            >
              <div>
                <StarRating count={r.stars} />
                <p className="text-tertiary text-[15px] leading-relaxed font-inter mb-6">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-5">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-primary font-inter text-[15px]">{r.name}</p>
                  <p className="text-tertiary text-sm">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
