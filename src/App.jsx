import { useRef } from "react";

import './css/styles.css';

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";

export default function App() {
  const landingRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const newsletterRef = useRef(null);

  const sections = [
    { label: "Landing Page", ref: landingRef },
    { label: "Projects", ref: projectsRef },
    { label: "Contact", ref: contactRef },
    { label: "Newsletter", ref: newsletterRef },
  ];

  return (
    <>
      <Navbar sections={sections} />

      <div ref={landingRef} className="section hero">
        <LandingPage />
      </div>

      <div ref={projectsRef} className="section">
        <Projects />
      </div>

      <div ref={contactRef} className="section">
        <Contact />
      </div>

      <div ref={newsletterRef} className="section">
        <Newsletter />
      </div>
    </>
  );
}