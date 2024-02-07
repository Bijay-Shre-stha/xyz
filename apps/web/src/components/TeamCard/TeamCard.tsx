import { LinkedinIcon } from "@/assets/icons";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  member: TeamMember;
};

const TeamCard = ({ member }: Props) => {
  const name = member.name.split(" ");
  let firstPart =
      name.length > 1 ? name.slice(0, name.length - 1).join(" ") : member.name,
    secondPart = "";
  if (name.length > 1) {
    secondPart = name[name.length - 1];
  }

  return (
    <motion.div
      className={clsx(
        "flex flex-col items-center my-6 p-5",
        member.rowspan ? "basis-full" : "basis-1/3"
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      // transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <a href={member.linkedin} target="_blank" rel="noreferrer">
        <div className="relative">
          <Image
            src={member.image}
            alt="judges image"
            className="rounded-full border-yellow-400 border-4 w-64 h-64 md:w-80 md:h-80 object-cover"
            height={300}
            width={300}
          />
          <span className="bg-[#4B64A3] p-2 absolute rounded-full bottom-2 right-2 md:bottom-5 md:right-5">
            <LinkedinIcon />
          </span>
        </div>
        <h3 className="font-mont font-bold text-xl lg:text-3xl mt-4 text-center text-white">
          {firstPart}
        </h3>
        <h3 className="font-mont font-bold text-xl lg:text-3xl text-primary text-center">
          {secondPart}
        </h3>
      </a>
    </motion.div>
  );
};

export default TeamCard;
