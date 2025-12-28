import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Testimonial from "./sections/Testimonial";
import Footer from "../../components/layout/Footer";
import "./sections/Hero.css";

export default function Home() {
  return (
    <>
    <Hero />
    <div className="hero px-72">
      <div className="bg-white rounded-t-3xl">
      <Features />
      <Testimonial />
      <Footer />
      </div>
    </div>
    </>
  );
}
