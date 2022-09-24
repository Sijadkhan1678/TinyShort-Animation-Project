import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Explore from './components/Explore'
import Advantage from './components/Advantage'
import Zapareblue from './components/Zapareblue'
import Enquiry from './components/Enquiry'
import Footer from './components/Footer'

const App = () => {
  
  return (
     <div id="wrapper">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <Advantage />
      <Zapareblue />
      <Enquiry />
      <Footer />
      </div>
  );
}

export default App;
