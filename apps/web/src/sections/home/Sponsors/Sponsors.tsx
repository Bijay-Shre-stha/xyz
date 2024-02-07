import logo from "@/assets/images/logo.png";
import Image from "next/image";

type Props = {
  sponsorGroups: SponsorGroup[];
};

const Sponsers = ({ sponsorGroups }: Props) => {
  return (
    <section className="bg-gradient-to-r from-[#4B64A3] to-[#182E66] py-10 px-10 md:py-24">
      <div className="container mx-auto">
        {/* <h2 className="font-mont font-bold text-3xl lg:text-5xl text-white text-center">
          Sponsors
        </h2> */}

        {sponsorGroups.map((sponsorGroup) => (
          <div className="mt-8 lg:mt-12" key={sponsorGroup.title}>
            <h3 className="font-mont font-bold text-2xl lg:text-5xl text-white text-center">
              {sponsorGroup.title}
            </h3>
            <div className="flex flex-col flex-wrap md:flex-row justify-center items-center py-10 mx-auto">
              {sponsorGroup.sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.link}
                  className="basis-1/4 p-3"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={500}
                    height={500}
                    className="h-32 lg:h-36 object-contain mx-auto"
                  />
                </a>
              ))}
            </div>
            <hr />
          </div>
        ))}

        <div className="font-poppins text-white text-center">
          <h2 className="font-bold text-xl lg:text-4xl mt-16">
            Interested in Sponsoring?
          </h2>
          <p className="font-bold lg:text-xl text-md">
            Email us:{" "}
            <a
              href={`mailto:${"deerhack@deerwalk.edu.np"}`}
              className="text-primary"
            >
              deerhack@deerwalk.edu.np
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsers;
