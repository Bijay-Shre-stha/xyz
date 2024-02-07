import { DeerhackLogo, DiscordLogo } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.webp";

type Props = {
  discordUrl: string;
  currentEvent: string;
};

const Hero = ({ discordUrl, currentEvent }: Props) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const finalDate = new Date("2023-05-05T17:00");

    setInterval(() => {
      const dt = new Date(Date.now());

      let remainingTime = finalDate.getTime() - dt.getTime();

      let days, hours, minutes, seconds;

      if (remainingTime < 0) {
        days = hours = minutes = seconds = 0;
      } else {
        remainingTime = Math.floor(remainingTime / 1000);

        days = Math.floor(remainingTime / (24 * 60 * 60));
        remainingTime = remainingTime % (24 * 60 * 60);

        hours = Math.floor(remainingTime / (60 * 60));
        remainingTime = remainingTime % (60 * 60);

        minutes = Math.floor(remainingTime / 60);
        remainingTime = remainingTime % 60;

        seconds = remainingTime;
      }

      setTime({ days, hours, minutes, seconds });
    }, 1000);
  }, []);

  return (
    <section
      className="flex flex-col text-center items-center justify-center pt-32 bg-[#302949] min-h-screen bg-[url('/images/hero_bg_2.webp')] bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      <div className="flex flex-col lg:flex-row gap-y-10">
        <div className="w-32 h-32 lg:w-56 lg:h-56 mx-auto lg:mr-32">
          <Image src={Logo} alt="Deerhack logo" />
        </div>
        <span className="mt-2 lg:hidden" key={"lg"}>
          <DeerhackLogo />
        </span>
        {/* vertical bar */}
        <div className="hidden lg:block">
          <svg
            width="4"
            height="232"
            viewBox="0 0 4 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.71386 0.342224C-0.334034 77.1354 -0.350687 154.963 1.71385 231.76C3.77839 154.965 3.76507 77.1372 1.71386 0.342224Z"
              fill="#FFD152"
            />
          </svg>
        </div>

        <div className="lg:ml-20">
          <span className="font-poppins font-semibold text-xl lg:text-3xl text-primary">
            Powered by
          </span>
          <Image
            src="/images/sponsors/worldlink.svg"
            alt=""
            width={330}
            height={50}
            className="mt-2 lg:mt-5 w-48 lg:w-80 mx-auto"
          />

          <span className="font-poppins font-medium text-sm text-primary mt-6 block">
            In Association with
          </span>

          <Image
            src="/images/sponsors/nimb.png"
            alt=""
            width={330}
            height={50}
            className="mt-2 lg:mt-5 w-36 lg:w-40 mx-auto"
          />
        </div>
      </div>

      <span className="mt-8 hidden lg:block" key={"sm"}>
        <DeerhackLogo />
      </span>

      {/* <h2 className="font-mont font-bold text-primary text-4xl lg:text-7xl">
        DeerHack 2023
      </h2> */}
      <h4 className="font-poppins font-medium text-2xl lg:text-5xl mt-8 text-white">
        5th-7th May
      </h4>
      <div className="flex flex-row gap-2 justify-center font-mont text-4xl lg:text-7xl text-primary font-bold mt-10">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-xl lg:text-4xl text-white">
            DeerHack 2023 has been concluded. See you again next time!
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div
          className="apply-button"
          data-hackathon-slug="deerhack"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>
      {/* <Link
        className="border-primary border-2 px-5 py-3 font-mont font-bold text-xl lg:text-3xl text-white mt-10 rounded-xl hover:bg-primary transition duration-200"
        href={"/register"}
      >
        Pre-Register
      </Link> */}

      <a href={discordUrl} className="my-10">
        <DiscordLogo />
      </a>
    </section>
  );
};

export default Hero;
