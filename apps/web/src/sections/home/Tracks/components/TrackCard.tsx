import Image from "next/image";
import React from "react";

type Props = {
  Logo: React.ReactElement;
  title: string;
  description: string;
};

const TrackCard = ({ Logo, title, description }: Props) => {
  return (
    <div className="bg-gradient-to-b from-[#A5A7FF] via-[#8183DA] to-transparent rounded-3xl text-center max-w-sm px-12 py-24">
      <figure className="text-primary md:h-44 lg:h-40">
        <span className="flex justify-center">{Logo}</span>
        <figcaption className="font-mont text-primary font-bold text-xl md:text-2xl mt-5">
          {title}
        </figcaption>
      </figure>
      <p className="mt-8 text-medium font-poppins text-xl md:text-2xl text-white">
        {description}
      </p>
    </div>
  );
};

export default TrackCard;
