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
      date: "Jan 4 - Jan 9, 2026. 7:00 - 8:30 PM CST daily.",
      description:
        "Introduction to combinatorics, geometry, advanced algebra, & probability. This class covers essential mathematical concepts and would be an excellent starting point for math competition preparation!"
    },
    {
      title: "Intermediate",
      date: "Jan 10 - Jan 15, 2026. 7:00 - 8:30 PM CST daily.",
      description:
        "Intermediate combinatorics, geometry, probability, complex numbers, trigonometry, introduction to number theory and advanced inequalities. Also a great resource for intermediate AMC 10/12 preparation!"
    },
    {
      title: "Advanced",
      date: "Jan 16 - Jan 22, 2026. 7:00 - 8:30 PM CST daily.",
      description:
        "Advanced combinatorics, probability, geometry, number theory, algebra, complex numbers, logarithms, and more. Especially great for strong AIME qualifiers and AMC 12 high scorers seeking deeper problem-solving mastery."
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
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center gap-8">
            
            {/* Left text */}
            <div className="flex-1">
              <p className="text-left text-gray-900 text-xl md:text-3xl leading-snug md:leading-relaxed font-sans">
                Riemann Math offers <span className = "font-bold">completely free</span> competition math tutoring and resources for young math students. Our classes encompass a broad range of advanced concepts, helping our students prepare for competitions such as the AMC 8, 10, 12, AIME, MATHCOUNTS, and more!
              </p>
            </div>

            {/* Right image */}
            <div className="flex-shrink-0 w-full max-w-xs md:max-w-sm mx-auto">
              <img
                src="tutoring-image.JPG"
                alt="Tutoring"
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </div>

          </div>
        </section>

        {/* SECTION 2 — Upcoming Classes */}
        <section className="bg-gray-300">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
            <h1 className="text-3xl font-bold text-black text-center mb-10">
              Upcoming Classes
            </h1>

            {/* CARD CONTAINER */}
            <div className="flex flex-col md:flex-row justify-center gap-y-4 md:gap-y-0 md:gap-x-6">
              {cards.map((card, idx) => {
                const [ref, inView] = useInView();
                const delay = (cards.length - 1 - idx) * 200;

                return (
                  <div
                    key={idx}
                    ref={ref}
                    className="bg-gray-100 rounded-lg shadow-lg p-6 md:p-8 min-h-[350px] flex flex-col opacity-0 transform transition-all duration-700 w-full md:flex-1 md:max-w-[350px]"
                    style={{
                      transitionDelay: `${delay}ms`,
                      transform: inView ? "translateX(0)" : "translateX(50px)",
                      opacity: inView ? 1 : 0
                    }}
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center mb-3">
                      {card.title}
                    </h2>

                    <p className="mb-4 text-center text-sm md:text-base">
                      {card.date}
                    </p>

                    <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center flex-1">
                      {card.description}
                    </p>

                    <button
                      onClick={() => navigate('/about')}
                      className="w-full md:w-auto font-bold py-2 px-4 rounded mt-6 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-300 hover:text-black transition"
                    >
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
