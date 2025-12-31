import './App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Resources() {
  const pdfResources = [
    { name: "Combinatorics & Casework", url: "/perms-combs-introd.pdf" },
    { name: "Polynomials & Algebra", url: "/algebra-introd.pdf" },
    { name: "2D Geometry", url: "/2dgeo-introd.pdf" },
    { name: "Probability", url: "/probability-introd.pdf" },
  ];

  return (
    <div className="App flex flex-col min-h-screen w-full bg-gray-200 relative">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>

      <main className="flex-grow max-w-6xl mx-auto p-6">
         <p className="font-bold text-black mb-8 text-left mt-7">Welcome! Here, you'll find completely free resources for your math competition preparation.</p> 
        <p className="font-bold text-black mb-8 text-left mt-7">The first video lectures and resources for classes will be posted by January 2nd, 2026.</p> 
                <p className="font-bold text-black mb-8 text-left mt-7">The first competition resources, including formula sheets, practice problems, and mock exams, will be posted by February 15th, 2026.</p> 
         
   <p className="text-3xl font-bold text-black mb-8 text-left mt-7">Competitions</p> 
          <p className="text-xl font-bold text-black mb-8 text-left mt-7">Coming soon!</p>
 <p className="text-3xl font-bold text-black mb-8 text-left mt-7">Classes</p> 
       <p className="text-2xl font-bold text-black mb-8 text-left mt-7">Introductory Advanced</p> 
        <div className="max-w-4xl mx-auto mt-10 p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pdfResources.map((pdf, index) => (
            <a
              key={index}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex justify-between items-center group"
            >
              <span className="text-lg mx-3 font-medium text-gray-700 group-hover:text-blue-600">
                {pdf.name}
              </span>
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                View PDF
              </span>
            </a>
        
          ))}
           
        </div>
         <p className="text-2xl font-bold text-black mb-8 text-left mt-7">Intermediate Advanced</p> 
            <p className="text-xl font-bold text-black mb-8 text-left mt-7">Coming soon!</p>
               <p className="text-2xl font-bold text-black mb-8 text-left mt-7">Advanced</p>
               <p className="text-xl font-bold text-black text-left">Coming soon!</p>
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Resources;