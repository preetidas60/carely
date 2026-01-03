import Hero from "./sections/Hero";
import "./sections/Hero.css";
import FeaturesPage from "./sections/Features/Features";
import About from "./sections/About/About";
import FAQ from "./sections/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesPage />
      <About />
      <FAQ />
    </>
  );
}
