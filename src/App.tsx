import { useEffect } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!elements.length) return;

    elements.forEach((element, index) => {
      const stagger = (index % 8) * 70;
      element.style.setProperty('--reveal-delay', `${stagger}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-bg-light">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
