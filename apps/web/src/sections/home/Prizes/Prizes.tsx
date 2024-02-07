import clsx from "clsx";
import { PrizeCard } from "./components";

type Props = {
  prizeCategories: PrizeCategory[][];
};

const Prizes = ({ prizeCategories }: Props) => {
  return (
    <section
      className="bg-gradient-to-r from-[#4B64A3] to-[#182E66] py-24"
      id="prizes"
    >
      <div className="container mx-auto">
        <h2 className="font-mont font-bold text-3xl lg:text-5xl text-white text-center">
          Prizes
        </h2>
        <div className="mt-16 lg:mt-8 flex flex-col justify-center items-center gap-x-4 gap-y-14 flex-wrap w-full px-5">
          {prizeCategories.map((prizeCategory, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row w-full max-w-5xl gap-x-6 gap-y-14"
            >
              {prizeCategory.map((prize, j) => (
                <div key={j} className="w-full">
                  <h3
                    className={clsx(
                      "lg:h-20 font-bold text-2xl md:text-3xl lg:text-5xl font-mont text-white text-center lg:text-start",
                      prize.category !== "" && "pb-5"
                    )}
                  >
                    {prize.category}
                  </h3>
                  <PrizeCard key={prize.prize.title} prize={prize.prize} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
