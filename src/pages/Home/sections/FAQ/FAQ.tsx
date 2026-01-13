import Assets from "../../../../assets";
import ".././Hero/Hero.css";
import { faq } from "../../../../utils/String";

export default function FAQ() {
  return (
    <main className="hero relative z-10 w-full min-h-screen py-12 md:py-20 flex flex-col items-center gap-y-10">
      {/* TITLE */}
      <div className="flex items-center justify-center gap-5 w-[90%] md:w-4/5">
        <hr className="flex-1 border-[#131313]" />

        <div className="font-octo-bold flex-1 text-center text-2xl sm:text-3xl md:text-4xl">
          {faq.title}
        </div>

        <hr className="flex-1 border-[#131313]" />
      </div>

      {/* SUBTITLE */}
      <section className="max-w-5xl mx-auto text-center px-6 md:px-10">
        <p className="text-base md:text-lg text-[#6F6F6F] leading-relaxed">
          {faq.subtitle}
        </p>
      </section>

      {/* FAQ GRID */}
      <section className="w-full px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {faq.questions.map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-[28px]
                p-5
                flex
                justify-between
                items-center
                gap-x-6
                shadow-[0_8px_24px_rgba(0,0,0,0.04)]
              "
            >
              <p className="text-sm md:text-[15px] text-[#2A2A2A]">
                {item.question}
              </p>

              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm flex-shrink-0">
                +
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS */}
      <section className="w-full px-6 md:px-8">
        <div className="max-w-6xl mx-auto bg-[#F1F5F1] rounded-[32px] px-8 md:px-14 py-12 md:py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                💬
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#2A2A2A]">
                {faq.contactSection.title}
              </h3>
            </div>

            <p className="text-[#7A7A7A] max-w-md leading-relaxed">
              {faq.contactSection.description}
            </p>

            <button className="mt-8 bg-primary text-white px-8 md:px-10 py-3 rounded-full font-medium">
              {faq.contactSection.buttonText}
            </button>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="flex justify-end">
            <img
              src={Assets.images_aboutUsFooter}
              alt="Support Illustration"
              className="w-[280px] md:w-[360px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
