import { useState } from "react";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Connect from "./component/Connect";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects/>
      <Skills />
      <Connect />
      <Footer />
    </>
  );
}

export default App;
