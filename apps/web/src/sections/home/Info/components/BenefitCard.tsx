import Image from "next/image";

type Props = {
  image: string;
  name: string;
  description: string;
};

const BenefitCard = ({ image, name, description }: Props) => {
  return (
    <div className="text-center">
      <Image
        src={image}
        alt={name}
        width={256}
        height={256}
        className="mx-auto object-contain w-64 h-64"
      />
      <h3 className="text-primary text-poppins font-bold text-2xl lg:text-4xl mt-2">
        {name}
      </h3>
      <p className="text-white font-poppins font-medium text-lg lg:text-2xl mt-3 md:h-64">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
