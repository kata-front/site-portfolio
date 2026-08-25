import Header from "./components/header"
import Hero from "./components/Hero"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <>
      <Header />
      <Hero /> 
      <Portfolio />
      <Contact />
    </>
  )
}

export default App
