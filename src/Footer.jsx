function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 w-full mt-12">
      <div className="max-w-6xl mx-auto text-center px-4">

        <p className="sm:text-lg font-medium tracking-wide text-sm">
          © {new Date().getFullYear()} Riemann Math — All rights reserved.
        </p>

        <p className="text-sm text-gray-400 mt-2">
          + 1 (713) 586-9498, riemann.math14@gmail.com
        </p>

      </div>
    </footer>
  );
}

export default Footer;
