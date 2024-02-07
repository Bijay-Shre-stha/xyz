import { CloseIcon } from "@/assets/icons";
import NavLinks from "./NavLinks";

type Props = {
  setOpen: Function;
};

const MobileNavbar = ({ setOpen }: Props) => {
  return (
    <div className="fixed inset-0 bg-black/95 grid place-content-center py-10">
      <span className="absolute right-5 top-5" onClick={() => setOpen(false)}>
        <CloseIcon />
      </span>

      <div className="overflow-y-auto w-screen">
        <ul
          className="flex flex-col justify-around gap-10 font-poppins font-semibold text-3xl text-center"
          onClick={() => setOpen(false)}
        >
          <NavLinks />
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
