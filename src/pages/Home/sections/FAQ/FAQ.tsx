import Assets from "../../../../assets";
import "../Hero.css";

export default function FAQ() {
  return (
    <main className=" flex items-center justify-center flex-col hero min-h-screen">
      <h1 className="text-[35px] pb-16 leading-tight text-textMuted">FAQ</h1>
      {/* FAQ GRID */}
      <section className="mt-20 px-8">
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
              className="bg-white rounded-full px-6 py-5 flex items-center justify-between shadow-sm"
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
      <section className="mt-28 px-8">
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

      {/* FOOTER SPACE */}
      <div className="h-32" />
    </main>
  );
}
