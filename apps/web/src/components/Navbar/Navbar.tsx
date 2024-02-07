import Link from "next/link";
import { DeerhackLogo } from "@/assets/images";
import { HamburgerIcon } from "@/assets/icons";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between container mx-auto p-5 items-center bg-transparent">
      <Link href={"/"}>
        <DeerhackLogo width={50} height={50} />
      </Link>
      <ul className="xl:flex flex-row justify-around gap-10 font-poppins font-semibold hidden">
        <NavLinks />
      </ul>
      <button className="xl:hidden" onClick={() => setOpen(!open)}>
        <HamburgerIcon />
      </button>
      {open && <MobileNavbar setOpen={setOpen} />}
    </nav>
  );
};

export default Navbar;
