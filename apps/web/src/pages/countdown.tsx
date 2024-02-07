import { Hero } from "@/sections/countdown"
import readNetworkData from "@/utilities/readNetworkData";

type Props = {
    networkData: NetworkData;
}

const CountDown = ({networkData}: Props) => {
    return (
        <Hero upcomingEvent={networkData.upcomingEvent} stime={networkData.upcomingEventTime} />
    )
}

export default CountDown;


export async function getServerSideProps() {

  const networkData = await readNetworkData("https://raw.githubusercontent.com/Deerwalk-Developers-Community/datahub/main/deerhack.json");

  return {
    props: {
      networkData: networkData
    },
  };
}
