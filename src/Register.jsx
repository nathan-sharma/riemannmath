import { useEffect } from "react";
import './App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function Register() {
  useEffect(() => {
    // Load the JotForm embed script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      // Run the embed handler AFTER script loads
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-252498121605153']",
          "https://form.jotform.com/"
        );
      }
    };

    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <div className="App flex flex-col min-h-screen w-full bg-gray-200">
      <Navbar />

      <div className="flex-1 w-full p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-8 text-center">
          Registration Portal
        </h1>
        <p className = " mb-5 text-center">The registration portal for winter classes will close on   <span className="font-bold"> December 29th, 2025 at 6:00 PM CST</span>. Please make sure you have reviewed all information on our classes in the About & Info page before registering. After registering, you will receive an email with the link to our Zoom meeting and Google Classroom, as well as detailed information on the course(s) you signed up for.</p>

        {/* JotForm iframe */}
        <iframe
          id="JotFormIFrame-252498121605153"
          title="Riemann Math Registration Portal"
          allow="geolocation; microphone; camera; fullscreen; payment"
          src="https://form.jotform.com/252498121605153"
          style={{ minWidth: "100%", maxWidth: "100%", height: "900px", border: "none" }}
          scrolling="no"
        />
      </div>
      <Footer/>
    </div>
  );
}

export default Register;
