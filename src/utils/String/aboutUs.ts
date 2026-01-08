import { colors } from "../../styles/theme";

export const aboutUs = {
  title: "About Us",

  subtitle:
    "At Carely, we are dedicated to empowering students with ADHD by providing tools that make it easier to manage tasks, routines, and focus with confidence.",

  values: [
    {
      title: "Empathy",
      description:
        "We understand the challenges of ADHD and design with compassion.",
      icon: "💛",
    },
    {
      title: "Simplicity",
      description:
        "We create simple, easy-to-use tools that reduce overwhelm.",
      icon: "✔️",
    },
    {
      title: "Guidance",
      description:
        "We provide supportive guidance to help students stay on track.",
      icon: "💡",
    },
    {
      title: "Positivity",
      description:
        "We celebrate progress and encourage positivity every step.",
      icon: "⭐",
    },
  ],

  valueCardBackgrounds : [
  `bg-[${colors.cardColor1}]`,
  `bg-[${colors.cardColor2}]`,
  `bg-[${colors.cardColor3}]`,
  `bg-[${colors.cardColor4}]`,
],

  whyCarelyTitle: "Why Choose Carely?",

  whyCarelyCards: [
    {
      title: "Evidence-Based",
      description:
        "Our tools are rooted in the latest ADHD research and best practices.",
      icon: "💡",
    },
    {
      title: "ADHD-Friendly",
      description:
        "Designed with ADHD students in mind, prioritizing clarity and calm.",
      icon: "🧠",
    },
    {
      title: "Safe & Secure",
      description:
        "Privacy and data security are top priorities for all users.",
      icon: "🔒",
    },
  ],
};
