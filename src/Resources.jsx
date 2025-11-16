import './App.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';





function Resources() {
 

  return (
    <div className="App flex flex-col w-full bg-white">

      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </div>
<h1 className = "text-3xl text-center mt-5">This page is a work in progress!</h1>
 
           
      

      {/* Footer */}
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default Resources;
