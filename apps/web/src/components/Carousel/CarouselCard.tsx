import Image from "next/image";
import { motion } from "framer-motion";
import { LinkedinIcon } from "@/assets/icons";

type Props = {
  link: string;
  img: string;
  name: string;
  role: string;
};

const CarouselCard = ({ link, img, name, role }: Props) => {
  return (
    <motion.div
      className="flex flex-col items-center my-6 "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
          <Image
            src={img}
            alt="judges image"
            className="rounded-full border-yellow-400 border-4 w-64 h-64 md:w-80 md:h-80 object-cover mx-auto"
            height={300}
            width={300}
          />
          <span className="bg-[#4B64A3] p-2 absolute rounded-full bottom-2 right-2 md:bottom-5 md:right-5">
            <LinkedinIcon />
          </span>
        </div>
        <h3 className="font-mont font-bold mt-4">{name}</h3>
        <p className="font-mont font-semibold">{role}</p>
      </a>
    </motion.div>
  );
};

export default CarouselCard;
