import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "@/components/Carousel";
import clsx from "clsx";
type Props = {
  carouselCard: CarouselCard[];
  title: string;
  bg: "light" | "dark";
  id: string;
};

const ListCarousel = ({ id, carouselCard, title, bg = "dark" }: Props) => {
  return (
    <div
      id={id}
      className={clsx(
        "contianer mx-auto bg-gradient-to-r py-24 px-10 text-white",
        bg === "dark"
          ? "from-[#100A28] to-[#4F3E93]"
          : "from-[#4B64A3] to-[#182E66]"
      )}
    >
      <h2 className="font-mont font-bold text-3xl lg:text-5xl text-white text-center ">
        {title}
      </h2>
      <Carousel carouselCard={carouselCard} />
    </div>
  );
};

export default ListCarousel;
