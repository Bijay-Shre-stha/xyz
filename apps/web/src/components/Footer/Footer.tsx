import { FbIcon, InstaIcon, LinkedinIcon } from "@/assets/icons";
import DiscordIcon from "@/assets/icons/DiscordIcon";
import DeerwalkLogo from "@/assets/images/dwit_logo.png";
import SoftwareClubLogo from "@/assets/images/software_club_logo.png";
import Image from "next/image";

type Props = {
  socialLinks: PageData["socialLinks"];
  contactEmail: string;
};

const Footer = ({ socialLinks, contactEmail }: Props) => {
  return (
    <div className="p-5 bg-color-5 w-full">
      <div className="flex flex-col lg:flex-row justify-between container mx-auto gap-y-10 lg:mt-10">
        <div>
          <div className="flex flex-row gap-5">
            <Image
              src={DeerwalkLogo}
              alt="Deerwalk Logo"
              width={80}
              height={80}
            />
            <Image
              src={SoftwareClubLogo}
              alt="Deerwalk Logo"
              width={80}
              height={80}
            />
          </div>
          <h3 className="font-mont text-xl md:text-3xl font-bold mt-7 text-white">
            DeerHack 2023
          </h3>
          <div className="font-poppins md:text-xl font-medium text-white mt-6">
            Email:{" "}
            <a
              href="mailto:softwareclub@deerwalk.edu.np"
              className="text-primary"
            >
              {contactEmail}
            </a>
          </div>
          <div className="font-poppins md:text-xl font-medium text-white mt-3">
            Contact:{" "}
            <a href="tel:+9779860050391" className="text-primary">
              +977 9860050391,{" "}
            </a>{" "}
            <a href="tel:+9779840033009" className="text-primary">
              +977 9840033009
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-5 justify-start lg:justify-center items-center h-[80px]">
            <a href={socialLinks.facebook}>
              <FbIcon />
            </a>
            <a href={socialLinks.instagram}>
              <InstaIcon />
            </a>
            <a href={socialLinks.discord}>
              <DiscordIcon />
            </a>
            <a href={socialLinks.linkedin}>
              <LinkedinIcon />
            </a>
          </div>
          <div className="font-mont font-bold text-white text-xl md:text-4xl mt-7">
            Event Summary
          </div>
          <div className="font-poppins md:text-xl font-medium text-white mt-3">
            Mode: <span className="text-primary">In-Person</span>
          </div>
          <div className="font-poppins md:text-xl font-medium text-white mt-3">
            Venue: <span className="text-primary">Deerwalk Complex</span>
          </div>
          <div className="font-poppins md:text-xl font-medium text-white mt-3">
            Date: <span className="text-primary">5th - 7th May, 2023</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t-2 border-gray-600 mt-10"></div>
      <div className="text-white font-poppins font-bold lg:text-xl mt-10 text-center">
        All Rights Reserved ©{" "}
        <span className="text-primary"> DWIT Software Club 2023</span>
      </div>
    </div>
  );
};

export default Footer;
