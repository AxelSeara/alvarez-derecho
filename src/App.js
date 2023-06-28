import React from "react"
import Navbar from "./components/Navbar";
import 'tailwindcss/tailwind.css';
import Hero from "./components/Hero";
import Specialist from "./components/Specialist";
import Contact from "./components/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Specialist />
      <Contact />
      <Cards/>
      <Footer/>
    </div>


  );
}

export default App;
