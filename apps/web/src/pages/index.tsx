import { Hero } from "@/sections/home/Hero";
import { Info } from "@/sections/home/Info";
import { Tracks } from "@/sections/home/Tracks";
import { Prizes } from "@/sections/home/Prizes";
import readDataFile from "@/utilities/readDataFile";
import readNetworkData from "@/utilities/readNetworkData";
import { Faq } from "@/sections/home/Faq";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import { Sponsors } from "@/sections/home/Sponsors";
import { ListCarousel } from "@/sections/home/ListCarousel";
import { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {
  tracks: Track[];
  prizes: PrizeCategory[][];
  faqs: Faq[];
  sponsors: SponsorGroup[];
  judges: CarouselCard[];
  mentors: CarouselCard[];
  pageData: PageData;
  networkData: NetworkData;
};

const Home = ({
  tracks,
  prizes,
  faqs,
  sponsors,
  mentors,
  judges,
  pageData,
  networkData
}: Props) => {

  const router = useRouter();


  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");

    if (!redirect) {
      sessionStorage.setItem("redirect", "true");

      router.replace("/winners");
      
    }

  }, [router]);


  return (
    <Layout pageData={pageData}>
      <>
        <Head>
          <title>DeerHack 2023 - Fawning Over Innovation</title>
        </Head>
        <Hero discordUrl={pageData.socialLinks.discord} currentEvent={networkData.currentEvent} />
        <Info />
        <Tracks tracks={tracks} />
        <Prizes prizeCategories={prizes} />
        <ListCarousel
          carouselCard={judges}
          title="Judges"
          bg="dark"
          id="judges"
        />
        <ListCarousel
          carouselCard={mentors}
          title="Mentors"
          bg="light"
          id="mentors"
        />
        <Faq faqs={faqs} />
        <Sponsors sponsorGroups={sponsors} />
      </>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const tracksData = await readDataFile("tracks.json");
  const prizesData = await readDataFile("prizes.json");
  const faqData = await readDataFile("faqs.json");
  const pageData = await readDataFile("pagedata.json");
  const sponsorData = await readDataFile("sponsors.json");
  const judgesData = await readDataFile("judges.json");
  const mentorsData = await readDataFile("mentors.json");

  const networkData = await readNetworkData("https://raw.githubusercontent.com/Deerwalk-Developers-Community/datahub/main/deerhack.json");

  return {
    props: {
      tracks: tracksData["tracks"],
      prizes: prizesData["prizes"],
      faqs: faqData["faqs"],
      sponsors: sponsorData["sponsorGroups"],
      judges: judgesData["judges"],
      mentors: mentorsData["mentors"],
      pageData: pageData,
      networkData: networkData
    },
  };
}
