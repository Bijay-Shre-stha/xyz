import Image from "next/image";
import DeerHackLogo from "./deerhack_logo.png";

type Props = {
  width: number;
  height: number;
};

const DeerhackLogo = ({ width, height }: Props) => {
  return (
    <Image
      src={"/images/logo.png"}
      alt="Deerhack logo"
      width={width}
      height={height}
    />
  );
};
export default DeerhackLogo;
