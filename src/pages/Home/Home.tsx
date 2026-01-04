import Hero from "./sections/Hero/Hero";
import "./sections/Hero/Hero.css";
import FeaturesPage from "./sections/Features/Features";
import About from "./sections/About/About";
import FAQ from "./sections/FAQ/FAQ";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      if (!sectionId || sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [location.state]);

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="features">
        <FeaturesPage />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="faq">
        <FAQ />
      </section>
    </>
  );
}
