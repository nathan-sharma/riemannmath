import { FaInstagram, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full mt-12">
      <div className="max-w-6xl mx-auto text-center px-4">

        {/* COPYRIGHT */}
        <p className="sm:text-lg font-medium tracking-wide text-sm">
          © {new Date().getFullYear()} Riemann Math — All rights reserved.
        </p>

        {/* CONTACT + ICONS */}
        <div className="
          flex flex-col sm:flex-row 
          items-center justify-center 
          gap-3 sm:gap-4 mt-3 
          text-sm text-gray-400
        ">

          <span>+ 1 (713) 586-9498</span>
          <span className="hidden sm:inline">•</span>

          <span>riemann.math14@gmail.com</span>
          <span className="hidden sm:inline">•</span>

          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/riemannmathtx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <FaInstagram size={26} className="text-pink-500" />
            </a>

            <a
              href="https://discord.gg/57jYDufdxb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="hover:scale-110 transition-transform"
            >
              <FaDiscord size={26} className="text-indigo-500" />
            </a>
           
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
