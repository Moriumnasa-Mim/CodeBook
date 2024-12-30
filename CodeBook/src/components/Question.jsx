 // eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "Why should I use CodeBook",
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi.'
  },
  {
    id: 2,
    question: "Can I access my eBook on mobile?",
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi.'
  },
  {
    id: 3,
    question: "Do you offer refunds?",
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi.'
  },
  {
    id: 4,
    question: "Do you support International payments?",
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi.'
  }
];

const Question = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="p-7 my-10 shadow-sm dark:text-slate-300">
      <div id="accordion-collapse" data-accordion="collapse">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
          Question in Mind
        </h1>

        {faqs.map((faq) => (
          <article key={faq.id}>
            <h2 id={`accordion-collapse-heading-${faq.id}`}>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right
                text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={activeId === faq.id}
                aria-controls={`accordion-collapse-body-${faq.id}`}
              >
                <span>{faq.question}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 transform ${
                    activeId === faq.id ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
           
            <div
              id={`accordion-collapse-body-${faq.id}`}
              className={`p-5 border border-t-0 border-gray-200 dark:border-gray-700 ${
                activeId === faq.id ? '' : 'hidden'
              }`}
              aria-labelledby={`accordion-collapse-heading-${faq.id}`}
            >
              {faq.answer}
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};

export default Question;
