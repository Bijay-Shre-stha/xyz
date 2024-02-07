import { Layout } from "@/components/Layout";
import readDataFile from "@/utilities/readDataFile";
import Image from "next/image";

type Props = {
  pageData: PageData;
};

const winners = ({ pageData }: Props) => {
  return (
    <Layout pageData={pageData}>
      <>
        <section
          className="flex flex-col text-center items-center  pt-32 bg-gradient-to-r from-[#100A28] to-[#4F3E93] min-h-screen "
          id="hero"
        >
          <Image
            src={"/images/winners/CONTRIVERS.svg"}
            height={600}
            width={600}
            alt="winners image"
          />
          <div className="container mx-auto p-5 flex flex-col lg:gap-y-28 gap-y-16">
            <h1 className="font-mont font-bold text-4xl lg:text-5xl mt-20 text-white text-center">
              TRACK WINNERS
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 py-14">
            <Image
              src={"/images/winners/CODE CRUSADERS.svg"}
              height={520}
              width={520}
              alt="winners image"
            />
            <Image
              src={"/images/winners/THE KRIPPLES.svg"}
              height={520}
              width={520}
              alt="winners image"
            />
            <Image
              src={"/images/winners/PENTAGON.svg"}
              height={520}
              width={520}
              alt="winners image"
            />
            <Image
              src={"/images/winners/CUSTODES.svg"}
              height={520}
              width={520}
              alt="winners image"
            />
          </div>
        </section>
      </>
    </Layout>
  );
};

export default winners;

export async function getStaticProps() {
  const pageData = await readDataFile("pagedata.json");

  return {
    props: {
      pageData: pageData,
    },
  };
}
