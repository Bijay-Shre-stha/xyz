import { FaqCard } from "./components";

type Props = {
  faqs: Faq[];
};

const Faq = ({ faqs }: Props) => {
  const col1 = faqs.slice(0, Math.floor(faqs.length / 2) + 1);
  const col2 = faqs.slice(Math.floor(faqs.length / 2) + 1);

  return (
    <section
      className="bg-gradient-to-r from-[#100A28] to-[#4F3E93] py-24"
      id="faq"
    >
      <div className="container mx-auto">
        <h2 className="font-mont font-bold text-3xl lg:text-5xl text-white text-center">
          FAQ
        </h2>
        <div className="mt-16 justify-between px-5 flex flex-col lg:flex-row gap-5">
          <div className="flex flex-col gap-y-5 w-full">
            {faqs.map((faq) => (
              <FaqCard key={faq.question} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
