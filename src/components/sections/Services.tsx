import { Badge } from '../ui/Badge';

const services = [
  {
    title: 'Wash & Fold Laundry Services',
    desc: 'Experience the ultimate convenience to fit your busy life. We handle everything from washing to perfectly folding your clothes.',
    img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=700&auto=format&fit=crop&q=80',
  },
  {
    title: 'Dry Cleaning',
    desc: 'Expert care for fabrics and special garments requiring professional attention and delicate handling.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format&fit=crop&q=80',
  },
  {
    title: 'Bedding & Linen Cleaning',
    desc: 'Cleaning for sheets, comforters, duvets and more to keep them fresh and wonderfully inviting.',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&auto=format&fit=crop&q=80',
  },
  {
    title: 'Ironing Services',
    desc: 'Keep your clothes crisp and wrinkle-free with our professional ironing and pressing service.',
    img: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=700&auto=format&fit=crop&q=80',
  },
  {
    title: 'Alterations & Repairs',
    desc: 'Tailoring to fix tears, adjust sizes and extend the life of your favourite garments.',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&auto=format&fit=crop&q=80',
  },
  {
    title: 'Leather Cleaning',
    desc: 'Specialist care for leather jackets, bags, shoes and unique luxury items.',
    img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&auto=format&fit=crop&q=80',
  },
];

export function Services() {
  return (
    <section className="bg-bg-light py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="container mx-auto max-w-7xl">

        <div className="text-center mb-14 flex flex-col items-center" data-reveal>
          <Badge variant="secondary" className="mb-5 text-sm font-bold tracking-wide shadow-none">
            Services
          </Badge>
          <h2 className="font-phudu text-4xl lg:text-[52px] font-black text-primary leading-[1.05] uppercase tracking-tight max-w-2xl">
            Exceptional Care for Your Garments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((srv, i) => (
            <div
              key={i}
              className="service-card group bg-white rounded-[32px] overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
              data-reveal
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                  src={srv.img}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Arrow button top-right */}
                <div className="service-arrow absolute top-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
              {/* Content */}
              <div className="p-7">
                <h3 className="font-phudu text-xl font-black text-primary mb-2 uppercase leading-snug">
                  {srv.title}
                </h3>
                <p className="text-tertiary text-[14px] leading-relaxed">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
