import React from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Resources() {
  // 1. Practice Problem Sets
  const practiceProblems = [
    { name: "Fundamentals Practice Problems & Solutions", url: "https://docs.google.com/document/d/1Yqs8EZTu7BqcnemuaLqM9I0ywfFCOlazE1aU3FIy7fQ/edit?usp=sharing", active: true },
    { name: "Intermediate Practice Problems & Solutions", url: "https://docs.google.com/document/d/12Qi5dHPTLP-6RdyAt7KnTko7B_-wH-MvMSiT243QlcE/edit?usp=sharing", active: false },
    { name: "Advanced Practice Problems & Solutions", url: "https://docs.google.com/document/d/1ljemzsrWvdMU9VUDU9z95Nb2To6RDE4k6weMnUgzi84/edit?usp=sharing", active: false },
  ];

  // 2. Mock Exams
  const mockExams = [
    { name: "2026 Riemann Math Mock AMC 10A", url: "https://forms.gle/dQDSLfzMMBKbY87JA", active: false },
    { name: "2026 Riemann Math Mock AMC 10B", url: "https://forms.gle/Q3gzANX5vwagiY4PA", active: false },
    { name: "2026 Riemann Math Mock AMC 12A", url: "https://forms.gle/qZKdMYpF3DoJoZjy6", active: false },
    { name: "2026 Riemann Math Mock AMC 12B", url: "https://forms.gle/gq7ukpZvt85bEvqk6", active: false },
  ];

  // 3. More Resources
  const moreResources = [
    { name: "AMC 10/12 & AIME Formula Sheet", url: "https://docs.google.com/document/d/1Yxqqik6GCxh0PvR1SUnj9tWQ5MKpE80PsGdMnLG1i6w/edit?usp=sharing", active: true },
    { name: "AOPS Volume 2 Chapters 1-15 Notes", url: "https://docs.google.com/document/d/1G37e6_RkZAY9uV8Lzsa2MzkdzS5zqwJj6_WU-m564Pc/edit?usp=sharing", active: true }
  ];

  const pdfResources = [
    { name: "Combinatorics & Casework", url: "/perms-combs-introd.pdf", active: true },
    { name: "Polynomials & Algebra", url: "/algebra-introd.pdf", active: true },
    { name: "2D Geometry", url: "/2dgeo-introd.pdf", active: true },
    { name: "3D Geometry", url: "/3dgeo-introd.pdf", active: true },
    { name: "Probability", url: "/probability-introd.pdf", active: true },
  ];

  const pdfResources2 = [
    { name: "Intro to Modular Arithmetic", url: "/perms-combs-introd.pdf", active: false },
    { name: "Geometric Trig & Rotations", url: "/algebra-introd.pdf", active: false },
    { name: "Intermediate Geometry", url: "/2dgeo-introd.pdf", active: false },
    { name: "Intermediate Probability", url: "/probability-introd.pdf", active: false },
    { name: "Algebraic Inequalities", url: "/probability-introd.pdf", active: false },
    { name: "Logarithms", url: "/probability-introd.pdf", active: false },
    { name: "Manipulating Functions", url: "/probability-introd.pdf", active: false },
  ];

  const pdfResources3 = [
    { name: "Intermediate Modular Arithmetic", url: "/perms-combs-introd.pdf", active: false },
    { name: "Algebraic Trigonometry", url: "/algebra-introd.pdf", active: false },
    { name: "Complex Numbers", url: "/2dgeo-introd.pdf", active: false },
    { name: "Combinatorial Identities", url: "/probability-introd.pdf", active: false },
    { name: "GCD & LCM Operations", url: "/probability-introd.pdf", active: false },
    { name: "Recursion", url: "/probability-introd.pdf", active: false },
  ];

  // Component that switches between a link and a WIP placeholder
  const ResourceCard = ({ item, activeColor }) => {
    // Tailwind color mapping to ensure text/border/bg work correctly
    const colorClasses = {
      green: "bg-green-100 text-green-700 border-green-500",
      purple: "bg-purple-100 text-purple-700 border-purple-500",
      blue: "bg-blue-100 text-blue-700 border-blue-400",
      yellow: "bg-yellow-100 text-yellow-700 border-yellow-500",
      orange: "bg-orange-100 text-orange-700 border-orange-400",
      red: "bg-red-100 text-red-700 border-red-500"
    };

    if (item.active) {
      return (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-6 border border-gray-300 rounded-lg shadow-sm flex justify-between items-center bg-white transition-all hover:shadow-md hover:border-${activeColor}-400 group`}
        >
          <span className={`text-lg mx-3 font-medium text-gray-700 group-hover:text-${activeColor}-600`}>
            {item.name}
          </span>
          <span className={`text-xs px-3 py-1 rounded-full shrink-0 font-semibold uppercase tracking-wider border ${colorClasses[activeColor]}`}>
            Open
          </span>
        </a>
      );
    }
    return (
      <div className="p-6 border border-gray-300 rounded-lg shadow-sm flex justify-between items-center bg-white cursor-default opacity-80">
        <span className="text-lg mx-3 font-medium text-gray-400">{item.name}</span>
        <span className="text-xs px-3 py-1 rounded-full shrink-0 font-semibold uppercase tracking-wider bg-gray-100 text-gray-400">
          Work in Progress
        </span>
      </div>
    );
  };

  return (
    <div className="App flex flex-col min-h-screen w-full bg-gray-200 relative">
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>

      <main className="flex-grow max-w-6xl mx-auto p-6">
        <p className="text-black mb-8 text-left mt-7">Welcome! Here, you'll find completely free resources for your math competition preparation.</p> 
  <p className="text-black mb-8 text-left mt-7">Fundamental concepts are geared towards initial preparation, while the intermediate and advanced concepts go more into detail on topics tested on the AMC 10, 12, and AIME. All topics are beneficial for preparation.</p> 
        <p className="text-3xl font-bold text-black mb-5 text-left mt-12">Practice</p>
        
        <section className="mb-10">
          <p className="text-xl font-semibold text-gray-700 mb-6 text-left border-l-4 border-green-500 pl-4">Practice Problem Sets</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practiceProblems.map((item, index) => <ResourceCard key={index} item={item} activeColor="green" />)}
          </div>
        </section>

        <section className="mb-10">
          <p className="text-xl font-semibold text-gray-700 mb-6 text-left border-l-4 border-purple-500 pl-4">Mock Exams</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockExams.map((item, index) => <ResourceCard key={index} item={item} activeColor="purple" />)}
          </div>
        </section>

        <section className="mb-12">
          <p className="text-xl font-semibold text-gray-700 mb-6 text-left border-l-4 border-blue-400 pl-4">More</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moreResources.map((item, index) => <ResourceCard key={index} item={item} activeColor="blue" />)}
          </div>
        </section>

        <hr className="border-gray-300 my-12" />

        <p className="text-3xl font-bold text-black mb-4 text-left">Concepts</p> 
        <p className="text-black mb-8 text-left">Resources in this section were used to teach our classes. Each PDF is a slideshow that explains the concept in detail.</p> 

        <section className="mb-10">
          <p className="text-xl font-semibold text-gray-700 mb-6 text-left border-l-4 border-yellow-300 pl-4">Fundamentals</p> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfResources.map((item, index) => <ResourceCard key={index} item={item} activeColor="yellow" />)}
          </div>
        </section>

        <section className="mb-10">
          <p className="text-xl font-semibold text-gray-700 mb-6 text-left border-l-4 border-orange-300 pl-4">Intermediate Concepts</p> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfResources2.map((item, index) => <ResourceCard key={index} item={item} activeColor="orange" />)}
          </div>
        </section>

        <section className="mb-20">
          <p className="text-xl font-semibold text-gray-700 mb-6 text-left border-l-4 border-red-400 pl-4">Advanced Concepts</p> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pdfResources3.map((item, index) => <ResourceCard key={index} item={item} activeColor="red" />)}
          </div>
        </section>

        <section className="flex flex-col items-center justify-center py-12 border-t border-gray-300">
          <a 
            href="https://www.youtube.com/@grogg007" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
          >
            <span>Video Lectures</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.612 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
            </svg>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Resources;