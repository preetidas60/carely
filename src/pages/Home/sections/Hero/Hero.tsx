import Assets from "../../../../assets";
import "./../Hero/Hero.css";
import "../../../../components/ui/button.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="translate-y-[-100px] translate-x-100">
          <h1 className="text-[70px] leading-tight text-textMain">
            Better Focus for <br /> ADHD Students
          </h1>

          <p className="mt-8 max-w-md text-[22px] leading-[1.8] text-textMuted textSubtle">
            Empowering ADHD students with simple routines and smart reminders
            for a focused, calmer daily life.
          </p>

          <button className="primary-button mt-12 mb-4 bg-primary text-white px-10 py-3 rounded-full shadow-sm hover:opacity-90 transition">
            <Link to="/dashboard"> Get Started</Link>
          </button>

          <p className="mt-8 max-w-md text-[20px] leading-[1.8] text-textMuted textSubtle">
            Get organized with our ADHD-friendly tools for managing tasks,
            routines, and medication.
          </p>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="relative flex justify-end">
          <img
            src={Assets.images_illustration}
            alt="ADHD focus illustration"
            className="
              w-[650px]
              max-w-none
              translate-x-8
              translate-y-[-10px]
            "
          />
        </div>
      </div>
    </section>
  );
}
