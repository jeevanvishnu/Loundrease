import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const blogs = [
  {
    title: 'Capsule Wardrobes and Laundry: A Match Made in Heaven',
    date: 'Dec 23, 2024',
    category: 'Lifestyle',
    img: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=700&auto=format&fit=crop&q=80',
  },
  {
    title: 'The Benefits of Outsourcing Your Laundry to Save Time',
    date: 'Dec 20, 2024',
    category: 'Tips',
    img: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=700&auto=format&fit=crop&q=80',
  },
  {
    title: 'The Ultimate Guide to Eco-Friendly Laundry Practices',
    date: 'Dec 15, 2024',
    category: 'Eco',
    img: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=700&auto=format&fit=crop&q=80',
  },
];

export function Blogs() {
  return (
    <section className="bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="container mx-auto max-w-7xl">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-8" data-reveal>
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-5 text-sm font-bold tracking-wide shadow-none">
              Our Blogs
            </Badge>
            <h2 className="font-phudu text-4xl lg:text-[48px] font-black text-primary mb-4 leading-tight uppercase tracking-tight">
              Laundry Tips, Trends, and Insights
            </h2>
            <p className="text-base lg:text-lg text-tertiary max-w-lg leading-relaxed">
              Expert laundry care tips, eco-friendly practices and industry trends.
              Our blog is here to help you get the most out of your LaundrEase experience.
            </p>
          </div>
          <Button variant="outline" size="lg" className="hidden lg:inline-flex shrink-0 rounded-[14px] font-bold uppercase text-[13px] tracking-wide">
            View All Blogs
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((b, i) => (
            <article key={i} className="group cursor-pointer" data-reveal="zoom">
              <div className="w-full aspect-[4/3] rounded-[28px] overflow-hidden mb-5 relative">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[13px] font-bold text-tertiary mb-2 flex items-center gap-2 uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
                Posted on {b.date}
              </p>
              <h3 className="font-phudu text-xl lg:text-2xl font-black text-primary leading-snug group-hover:text-secondary transition-colors uppercase">
                {b.title}
              </h3>
            </article>
          ))}
        </div>

        {/* Mobile button */}
        <div className="mt-10 text-center lg:hidden">
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-[14px] font-bold uppercase text-[13px]">
            View All Blogs
          </Button>
        </div>

      </div>
    </section>
  );
}
