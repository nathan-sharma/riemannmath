import './App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Info() {
  return (
    <div className="App flex flex-col min-h-screen w-full bg-gray-200 relative">
      <Navbar />

      {/* Main content */}
      <div className="flex-1 w-full p-6">
        
        {/* Founder Section */}
        <div className="max-w-6xl mx-auto mb-16">

          <h1 className="text-3xl font-bold text-black mb-8 text-left mt-7">
            Our Founder
          </h1>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            
            {/* LEFT — Text */}
            <div className="flex-1 text-left">
              <p className="text-lg leading-relaxed text-gray-900 mb-4">
                Hi, I’m Nathan Sharma! I first got involved in competitive math when I was in sixth grade. I have competed in the AMC 8, 10, and 12 and represented my school in the Houston MATHCOUNTS Chapter. Though I was enthusiastic about competitive math, I never knew where to start with my preparation. Resources offered online were vague, and competiton math classes costed hundreds if not thousands of dollars. I created Riemann Math to give students what I didn’t have – accessible, high quality math tutoring.
              </p>

              <p className="text-lg leading-relaxed text-gray-900">
                I am currently a sophomore in high school who regularly competes in math competitions. I have recently started averaging 115 on mock AMC 12s, and I hope to qualify for the AIME next year and potentially the USAMO my senior year. I am also Vice President of the Cinco Ranch High School Math Honors Society and the Cinco Ranch High School Physics Club. In February I hope to compete at the Harvard & MIT Mathematics Tournament. I am currently preparing for the AMC, AIME, CHMMC, and F=MA competitions.
              </p>
            </div>

            {/* RIGHT — Image */}
            <div className="flex-1 flex justify-center md:justify-center">
              <img 
                src="nathan.png"
                alt="Nathan Sharma"
                className="w-full max-w-sm rounded-lg shadow-lg object-cover"
              />
            </div>

          </div>
        </div>

        {/* Classes Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-black mb-6 text-left">
            Classes
          </h1>
          <h2 className="text-lg text-gray-900 mb-4">
            2026 winter classes are virtual and will be hosted on Zoom beginning December 30th, 2025. Each class will last for 90 minutes, and homework will be assigned via Google Classroom. You can find more information on our classes below. Sessions are limited to a maximum of 30 students per class. <span className="font-bold">If you complete at least four homeworks and attend at least five days of lessons, you will receive a certificate of course completion. </span> Not sure which class is right for you? Take this year’s{' '}
            <a
              href="https://forms.gle/yLL79Dyuw5TWMgRw8"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-black hover:text-gray-600"
            >
              diagnostic exam
            </a>! We will have your test scored in a week or less and provide a detailed report on your recommended placement.

         <h6 className = "mt-4"> Note: this information page is centered around AMC/AIME preparation, but our classes are a valuable resource for almost any high school math competition.</h6>
          <h6 className = "mt-4"> If you have any questions, feel free to contact us at riemann.math14@gmail.com.</h6> 
          </h2>
      
        </div>

        {/* New Subsection Below Classes */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-black mb-4 text-left">
            Introductory Advanced (Dec 30 - Jan 4)
          </h2>

          <div className="text-gray-900 text-lg leading-relaxed">
          <p>This class will cover foundational math concepts that are almost always tested on the AMC 8, 10 and AMC 12. Students should be familiar with basic algebra and geometry.</p>

​

<p>Day 1: Casework, N choose K and Pascal's Triangle, Permutations, Stars and Bars</p>

​

<p>Day 2: Probability with combinatorics, Geometric Probability</p>

​

<p>Day 3: Polynomials, Vieta's Formulas, Algebraic Manipulations</p> 

​

<p>Day 4: Similar Triangles, Properties of Triangles</p>

​

<p>Day 5: Circles, Power of A Point</p>

​

<p>Day 6: 3D Geometry</p>
          </div>
        </div>
  <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-black mb-4 text-left">
            Intermediate Advanced (Jan 5 - 10)
          </h2>

          <div className="text-gray-900 text-lg leading-relaxed">
          <p>This class will delve into more advanced topics typically covered on the later AMC 10/12 questions and early AIME questions. A good bridge between AMC and AIME preparation.</p>

<p className = "mt-4">​Day 1: Modular Arithmetic Intro</p>

​

<p>Day 2: Geometric Trigonometry & Rotations</p>

​

<p>Day 3: Intermediate Geometry: Stewart's Theorem, Coordinate Geometry, Area Ratios, Cyclic Quadrilaterals</p>

​

<p>Day 4: Probability States, Conditional Probability, Expected Value</p>

​

<p>Day 5: AM-GM inequality, Cauchy Schwarz Inequality, Logarithms</p>​

​

<p>Day 6: Functions, Strategic Manipulations, Evaluating Summations</p>
          </div>
        </div>
         <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-black mb-4 text-left">
           Advanced (Jan 11 - 17)
          </h2>

          <div className="text-gray-900 text-lg leading-relaxed">
          <p>This class will cover advanced concepts typically tested on the mid/late AIME questions and late AMC 12 questions. Students should have AMC 12 scores consistently meeting or exceeding the AIME cutoff. </p>

<p className = "mt-4">Day 1: Intermediate Modular Arithmetic, Euler's Totient Function, Fermat's Little Theorem, Binomial Theorem</p>

​

<p>Day 2: Algebraic Trigonometry</p>

​

<p>Day 3: Complex Numbers: Euler's Formula, Roots of Unity, Complex Conjugates, Magnitudes</p>

​​

<p>Day 4: Combinatorial Identities, Advanced Counting Techniques</p>

​

<p> Day 5: GCD and LCM operations</p>

​

<p>Day 6: Advanced Recursion and Sequences</p>

​

<p>Day 7: Miscellaneous Topics, Review</p>
          </div>
              <div className="max-w-6xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-black mb-6 text-left mt-10">
            Calendar
          </h1>
          <div className="w-full flex">
    <iframe
      src="https://calendar.google.com/calendar/embed?src=ada628ee0d6342e38f1d968c0b02703461c1de4fe9034bca717e3cc5e1532171%40group.calendar.google.com&ctz=America%2FChicago"
      style={{ border: 0 }}
      width="1600"
      height="1200"
      frameBorder="0"
      scrolling="no"
      className="rounded-lg shadow-lg"
    ></iframe>
  </div>

        </div>

        </div>
      </div>
     <Footer/>  
    </div>
  );
}

export default Info;
