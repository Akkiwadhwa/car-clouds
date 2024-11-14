// components/Faq.js
import { useState } from 'react';

const faqs = [
  {
    question: "Can I sell my car if it’s on finance ?",
    answer: `Absolutely! With Car Clouds, you can sell a financed car, even if it’s on a Hire Purchase (HP) or Personal Contract Purchase (PCP) agreement.
             You don’t need to have completely paid off the finance, but there may be a minimum repayment required before selling, depending on your contract.
             If you’re ready to proceed, just get a “settlement figure” from your lender, and then start by getting a car valuation with us. Need more info? We’ve got a guide on selling financed cars that walks you through it!`,
  },
  {
    question: "How much is my car worth ?",
    answer: `Car Clouds’ smart valuation tech pulls live data from the UK car market, including sales info from our own buyer network. This means you’ll always get an accurate, up-to-date estimated selling price. Get your free car valuation now and track any price changes.`,
  },
  {
    question: "Where can I sell my car for the best price ?",
    answer: `At Car Clouds, we’re all about getting you the best price from verified dealers, without any fees. Take a look at our guide for extra tips on maximising the value of your car sale.`,
  },
  {
    question: "Who will buy my car ?",
    answer: `Your car will be matched with a network of trusted buyers who are interested in purchasing vehicles like yours.`,
  },
  {
    question: "What paperwork do I need to sell my car ?",
    answer: `The essential documents include your car's V5C logbook, service history, and any warranty documents.`,
  },
  {
    question: "How does service history impact the sale of my car ?",
    answer: `A full service history can significantly increase the value of your car and make it more attractive to buyers.`,
  },
  {
    question: "Is it free to sell my car with Car Clouds ?",
    answer: `Yes, our platform offers free car valuations and does not charge any fees for selling.`,
  },
  {
    question: "How can I sell my car quickly ?",
    answer: `With Car Clouds, you can get an instant valuation and quickly connect with verified buyers to ensure a fast sale.`,
  },
  {
    question: "Is it better to part exchange or sell my car online ?",
    answer: `Selling online typically offers more control and a wider audience, which may result in a better price.`,
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center px-4 py-5">
      <h1 className="text-5xl text-black font-bold text-center mb-6">FAQ's</h1>
      <div className="grid gap-6 mt-2 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pr-4 pl-4  pb-4 cursor-pointer">
            <div onClick={() => toggleFaq(index)} className="flex justify-between items-center">
              <h2 className="sm:text-lg text-sm text-gray-600   font-semibold">{faq.question}</h2>
              <span className="text-xl text-gray-600  font-bold">
                {openIndex === index ? '-' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm sm:lg ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
