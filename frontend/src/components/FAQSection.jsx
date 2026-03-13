import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-7 flex justify-between items-center text-left group transition-all"
      >
        <span className="text-lg font-medium text-slate-800 group-hover:text-black">
          {question}
        </span>
        <span className={`text-2xl font-light text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      
      {/* Animated Answer Container */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-500 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const faqs = [
    {
      question: "How can I get the update?",
      answer: "Updates are sent automatically to your registered email. You can also download the latest version from your dashboard account."
    },
    {
      question: "Which license is right for you?",
      answer: "The Standard license is for single projects, while the Extended license allows for multiple commercial deployments."
    },
    {
      question: "How long is my license valid for?",
      answer: "All our licenses are lifetime perpetual. You pay once and own the version forever."
    },
    {
      question: "Which platforms will the template support?",
      answer: "The template is fully responsive and supports all modern browsers including Chrome, Safari, Edge, and Firefox."
    },
    {
      question: "For what kind of projects is the Standard license intended?",
      answer: "Standard is perfect for personal portfolios, startup landing pages, and internal company tools."
    },
    {
      question: "Do you have a free demo to review the code before purchasing?",
      answer: "Yes, you can check our public GitHub repository for a simplified 'Lite' version of the architecture."
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header (Optional, matches the style of previous sections) */}
        <div className="mb-12">
          <p className="text-gray-400 font-bold tracking-widest text-[10px] uppercase mb-2">FAQ</p>
          <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}