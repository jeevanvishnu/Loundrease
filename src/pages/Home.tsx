import { Hero } from '../components/sections/Hero';
import { Stats } from '../components/sections/Stats';
import { Process } from '../components/sections/Process';
import { Services } from '../components/sections/Services';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { Blogs } from '../components/sections/Blogs';
import { FAQ } from '../components/sections/FAQ';
import { CTA } from '../components/sections/CTA';

const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <Stats />
      <Process />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Blogs />
      <FAQ />
      <CTA />
    </main>
  );
}

export default Home;
