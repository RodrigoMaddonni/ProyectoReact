import { useState, useEffect, useRef } from "react";

import './css/styles.css';

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";

export default function App() {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
      fetch('/data/projects.json')
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error al obtener los datos");
          }
          return res.json();
        })
        .then((data) => {
          setProjects(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
      }, []);

      if (loading) return <p>Cargando...</p>;
      if (error) return <p>Error: {error}</p>;

    return (
      <>
        <div className="principal-content">
            <Navbar sections={sections} />

            <div ref={landingRef} className="section">
              <LandingPage />
            </div>

            <div ref={projectsRef} className="section">
              <Projects projectsJson={projects}/>
            </div>

            <div ref={contactRef} className="section">
              <Contact />
            </div>

            <div ref={newsletterRef} className="section">
              <Newsletter />
            </div>
        </div>
      </>
    );
}