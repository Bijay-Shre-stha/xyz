import { Illustration1, Illustration2, Illustration3 } from "@/assets/images";
import { BenefitCard, InfoCard } from "./components";

const Info = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#4B64A3] to-[#182E66] py-10 lg:py-24"
      id="about"
    >
      <div className="container mx-auto p-5 flex flex-col lg:gap-y-28 gap-y-16">
        <InfoCard
          titleFirst="Deerwalk Institute of "
          titleSecond="Technology"
          content="Deerwalk Institute of Technology (DWIT) is an educational institution that prepares students and professionals of all levels to meet the problems and grab the possibilities of the twenty-first century IT Industry. The institute is well-known for its approach to learning that is both open-minded and responsible. It has an affiliation with Tribhuvan University and offers two undergraduate degrees, BSc. CSIT and BCA."
          illustration={<Illustration1 />}
        />

        <InfoCard
          titleFirst="Deer"
          titleSecond="Hack 2023"
          alignRight={true}
          content="DeerHack 2023 is a 48-hour hackathon where developers, designers, students, entrepreneurs, educators, and mentors work together to build ideas that solve real-world complications. Deer Hack provides an opportunity for individuals to sharpen their teamwork, communication, leadership skills, and networking in a risk-free and comfortable environment."
          illustration={<Illustration2 />}
        />
      </div>
      <div className="container mx-auto">
        <h2 className="font-mont font-bold text-3xl lg:text-5xl mt-20 text-white text-center">
          Benefits of <span className="text-primary">Participating</span>
        </h2>
        <div className="grid md:grid-cols-2 p-5 lg:gap-32 gap-20 lg:mt-20">
          <BenefitCard
            image="/images/benefits/network.png"
            name="Network"
            description="DeerHack is the perfect platform to build your connections who regardless of their expertise/sectors will come in handy some day in the future."
          />
          <BenefitCard
            image="/images/benefits/support.svg"
            name="Support for your Ideas"
            description="DeerHack is dedicated to fostering ideas that drive global change and provide new solutions. We guarantee that no participant will leave DeerHack empty-handed, and we will do all that we can to support everyone's ambition."
          />
          <BenefitCard
            image="/images/benefits/career.svg"
            name="Career Opportunities"
            description="DeerHack is the perfect platform to build your connections who regardless of their expertise/sectors will come in handy some day in the future."
          />
          <BenefitCard
            image="/images/benefits/interpersonal.svg"
            name="Interpersonal Development"
            description="DeerHack will undoubtedly test your abilities. The pressure you'll feel here will definitely convert you into a diamond."
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
