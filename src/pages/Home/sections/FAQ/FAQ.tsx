import Assets from "../../../../assets";
import ".././Hero/Hero.css";

export default function FAQ() {
  return (
    <main className="hero relative z-10 w-full min-h-screen py-24 flex flex-col items-center justify-stretch gap-y-10">
      <div
        className="flex items-center justify-center gap-5 w-[90%] md:w-4/5"
        style={{ opacity: 1, transform: "none" }}
      >
        <hr className="flex-1 border-[#131313]" />
        <div className="font-octo-bold flex-1 text-center text-3xl sm:text-4xl md:text-5xl ">
          FAQ
        </div>
        <hr className="flex-1 border-[#131313]" />
      </div>

      <section className="max-w-5xl mx-auto text-center px-10">
        <p className="text-xl text-[#6F6F6F] leading-relaxed">
          Learn more about Carely through answers to common questions, helping
          you understand how it works, what to expect, and how it supports you
          with clarity, trust, and peace of mind.
        </p>
      </section>

      {/* FAQ GRID */}
      <section className="px-8 flex items-center justify-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            "What is Carely?",
            "Is Carely safe and secure?",
            "Can parents and teachers use Carely too?",
            "What devices can I use Carely on?",
            "How does Carely help ADHD students?",
            "How do I set up reminders and routines?",
            "Do you offer customer support?",
            "Is there a cost to using Carely?",
          ].map((question, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px]
              p-5
              flex
              justify-between
              items-center
              gap-x-8
              shadow-[0_8px_24px_rgba(0,0,0,0.04)]
              "
            >
              <p className="text-[15px] text-[#2A2A2A]">{question}</p>

              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">
                +
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className=" px-8">
        <div className="max-w-6xl mx-auto bg-[#F1F5F1] rounded-[32px] px-14 py-16 grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                💬
              </div>
              <h3 className="text-[26px] font-semibold text-[#2A2A2A]">
                Still have questions?
              </h3>
            </div>

            <p className="text-[#7A7A7A] max-w-md leading-relaxed">
              Contact our friendly support team, we’ll be happy to help!
            </p>

            <button className="mt-8 bg-primary text-white px-10 py-3 rounded-full font-medium">
              Contact Us
            </button>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div>
            <img
              src={Assets.images_aboutUsFooter}
              alt="Support Illustration"
              className="w-[360px] ml-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
