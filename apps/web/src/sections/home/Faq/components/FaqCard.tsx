import clsx from "clsx";
import { useState } from "react";

type Props = {
  faq: Faq;
};

const FaqCard = ({ faq }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full">
      <h2>
        <button
          type="button"
          className={clsx(
            "flex h-auto lg:h-24 items-center justify-between w-full py-5 px-8 text-left rounded-t-xl bg-color-4 text-white font-semibold font-mont text-lg lg:text-xl xl:text-2xl",
            !open && "rounded-b-xl"
          )}
          onClick={handleClick}
        >
          <span>{faq.question}</span>
          <svg
            data-accordion-icon
            className={clsx("w-6 h-6 shrink-0", open && "rotate-180")}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        className={clsx(
          "font-poppins font-medium text-xl bg-color-4 rounded-b-xl",
          !open && "hidden"
        )}
      >
        <div className="py-5 px-8">
          <p className="mb-2 text-white">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
