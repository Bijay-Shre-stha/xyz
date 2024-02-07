import { ArrowIcon } from "@/assets/icons";
import clsx from "clsx";
import { MouseEventHandler } from "react";

type Props = {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  type: "next" | "prev";
};

function Arrow(props: Props) {
  const { className, onClick, type } = props;
  return (
    <span
      className={clsx(className, "before:hidden")}
      style={type === "next" ? { transform: "rotate(180deg)" } : undefined}
      onClick={onClick}
    >
      <ArrowIcon />
    </span>
  );
}

export default Arrow;
