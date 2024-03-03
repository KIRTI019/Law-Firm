import React from "react";
import Header from "./components/Header/header";
import Nav from "./components/Navbar/Nav";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Testimonial from "./components/Testimonial/testimonial";
import Footer from "./components/Footer/footer";
import Location from "./components/Contact/map";
import Contact from "./components/Contact/contact";
import Legal from "./components/Legal/legal";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Services />
      <About />
      <Legal />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
