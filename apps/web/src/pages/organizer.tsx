import { Layout } from "@/components/Layout";
import { TeamRow } from "@/sections/team/TeamRow";
import readDataFile from "@/utilities/readDataFile";
import Head from "next/head";

type Props = {
  pageData: PageData;
  teams: Team[];
};

const Team = ({ pageData, teams }: Props) => {
  return (
    <Layout pageData={pageData} transparentNav={false}>
      <>
        <Head>
          <title>Organizers - DeerHack 2023</title>
        </Head>

        <div className="bg-gradient-to-r from-[#100A28] to-[#4F3E93] py-10 md:py-24 px-10">
          <div className="container mx-auto">
            <h2 className="font-mont font-bold text-3xl lg:text-5xl text-white text-center">
              Meet the <span className="text-primary">Organizers</span>
            </h2>
            <div className="mt-16">
              {teams.map((team, i) => (
                <TeamRow team={team} key={i} />
              ))}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default Team;

export async function getStaticProps() {
  const pageData = await readDataFile("pagedata.json");
  const teamData = await readDataFile("team.json");
  return {
    props: {
      pageData: pageData,
      teams: teamData["teams"],
    },
  };
}
