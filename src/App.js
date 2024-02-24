import React from "react";
import Header from "./components/Header/header";
import Nav from "./components/Navbar/Nav";
import About from "./components/About/about";
import services from "./components/Services/services";
import Testimonial from "./components/Testimonial/testimonial";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
