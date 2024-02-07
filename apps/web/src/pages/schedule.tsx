import { Layout } from "@/components/Layout";
import { Events } from "@/sections/events";
import readDataFile from "@/utilities/readDataFile";
import Head from "next/head";
import { useState } from "react";

type Props = {
  pageData: PageData;
  eventsData: Events[];
};

const Schedule = ({ pageData, eventsData }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleDataChange = (next: boolean) => {
    let newIndex = currentIndex + (next ? 1 : -1);
    if (newIndex < 0) newIndex = eventsData.length - 1;
    newIndex = newIndex % eventsData.length;
    setCurrentIndex(newIndex);
  };

  return (
    <Layout pageData={pageData} transparentNav={false}>
      <>
        <Head>
          <title>Schedule - DeerHack 2023</title>
        </Head>
        <Events
          currentData={eventsData[currentIndex]}
          setCurrentData={handleDataChange}
        />
      </>
    </Layout>
  );
};

export default Schedule;

export async function getStaticProps() {
  const pageData = await readDataFile("pagedata.json");
  const eventsData = await readDataFile("events.json");
  return {
    props: {
      pageData: pageData,
      eventsData: eventsData.events,
    },
  };
}
