import { TrophieLogo } from "@/assets/icons";
import Image from "next/image";

type Props = {
  prize: Prize;
};

const PrizeCard = ({ prize }: Props) => {
  return (
    <div>
      <div className="relative max-w-2xl mx-auto">
        <div className="h-40 bg-secondary w-full rounded-t-xl"></div>
        <div className="left-0 right-0 absolute flex justify-center">
          <div className="top-32 p-8 drop-shadow-md rounded-full bg-white mx-auto inline-block translate-y-[-50%]">
            <Image
              src={prize.icon}
              alt={prize.title}
              width={100}
              height={100}
              className="object-contain w-20 h-20"
            />
          </div>
        </div>
        <div className="bg-white pt-24 pb-11 rounded-b-xl">
          <h4 className="text-center font-mont font-bold text-xl md:text-2xl lg:text-3xl">
            {prize.title}
          </h4>
          <div className="font-mont font-medium italic text-sm lg:text-base text-center h-16">
            {prize.description}
          </div>
          <span className="text-center mt-12 block font-mont font-semibold text-base h-4">
            {prize.prize_text && prize.prize_text}
          </span>
          <div className="font-mont font-bold text-3xl md:text-4xl lg:text-6xl text-center text-secondary mt-2">
            {prize.prize}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeCard;
