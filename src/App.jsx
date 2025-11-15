import './App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [threshold]);

  return [ref, inView];
}

function App() {
  const navigate = useNavigate();
  const cards = [
    {
      title: "Introductory",
      date: "Dec 30, 2025 - Jan 4, 2026. 7:00 - 8:30 PM CST daily.",
      description:
        "Introduction to combinatorics, geometry, advanced algebra, & probability. This class covers essential concepts. A good choice for anyone getting started with competition math."
    },
    {
      title: "Intermediate",
      date: "Jan 5 - Jan 10, 2026. 7:00 - 8:30 PM CST daily.",
      description:
        "Intermediate combinatorics, geometry, probability, complex numbers, trigonometry, introduction to number theory and advanced inequalities. Great for students aiming to reach or surpass the AIME qualification threshold."
    },
    {
      title: "Advanced",
      date: "Jan 11 - Jan 17, 2026. 7:00 - 8:30 PM CST daily.",
      description:
        "Advanced combinatorics, probability, geometry, number theory, algebra, complex numbers, logarithms, and more. Great for strong AIME qualifiers and AMC 12 high scorers seeking deeper problem-solving mastery."
    }
  ];

  return (
    <div className="App flex flex-col w-full bg-white">

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>

      <main className="flex-1">

        {/* SECTION 1 — Hero */}
        <section className="bg-gray-200">
          <div className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <p className="text-left text-gray-900 text-2xl md:text-3xl leading-snug md:leading-relaxed font-sans">
                Riemann Math is a <span className="font-bold">completely free</span> competitive math tutoring service based in Katy, Texas made for young students preparing for math competitions. Our curriculum covers concepts tested on the AMC 8s, 10s, 12s, MATHCOUNTS, AIMEs, and more!
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="/tutoring-image.JPG"
                alt="Tutoring photo"
                className="w-full max-w-sm rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* SECTION 2 — Upcoming Classes */}
        <section className="bg-gray-300">
          <div className="max-w-6xl mx-auto px-8 py-16">
            <h1 className="text-3xl font-bold text-black text-center mb-10">Upcoming Classes</h1>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {cards.map((card, idx) => {
                const [ref, inView] = useInView();
                const delay = (cards.length - 1 - idx) * 200;

                return (
                  <div
                    key={idx}
                    ref={ref}
                    className="bg-gray-100 rounded-lg shadow-lg p-8 min-h-[350px] flex flex-col opacity-0 transform transition-all duration-700"
                    style={{
                      flex: '1 1 0',
                      maxWidth: '350px',
                      transitionDelay: `${delay}ms`,
                      transform: inView ? 'translateX(0)' : 'translateX(50px)',
                      opacity: inView ? 1 : 0
                    }}
                  >
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">{card.title}</h2>
                    <p className="mb-4 text-center">{card.date}</p>
                    <p className="text-gray-700 text-lg leading-relaxed text-center flex-1">{card.description}</p>
                  
                    <button  onClick={() => navigate('/info-and-about')} className="font-bold py-2 px-4 rounded mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-300 hover:text-black transition">
                      Learn More
                    </button>
                  
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-300">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
