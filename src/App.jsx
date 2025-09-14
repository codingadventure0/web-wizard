import { useState } from "react";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
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
      <Footer />
    </>
  );
}

export default App;
