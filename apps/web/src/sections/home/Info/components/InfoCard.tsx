import clsx from "clsx";

type Props = {
  alignRight?: boolean;
  titleFirst: string;
  titleSecond: string;
  content: string;
  illustration: React.ReactNode;
};

const InfoCard = ({
  alignRight,
  titleFirst,
  titleSecond,
  content,
  illustration,
}: Props) => {
  return (
    <div
      className={clsx(
        "flex",
        alignRight ? ["lg:flex-row-reverse", "lg:text-right"] : "flex-row"
      )}
    >
      <div className="w-full lg:w-9/12">
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-mont">
          {titleFirst}
          <span className="text-primary">{titleSecond}</span>
        </h3>
        <p className="text-sm md:text-lg lg:text-xl font-medium text-white mt-3 font-poppins">
          {content}
        </p>
      </div>
      <div className="hidden lg:block w-3/12">{illustration}</div>
    </div>
  );
};

export default InfoCard;
