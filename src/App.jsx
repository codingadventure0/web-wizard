import { useState } from "react";
import Hero from "./component/Hero";
import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
    </>
  );
}

export default App;
