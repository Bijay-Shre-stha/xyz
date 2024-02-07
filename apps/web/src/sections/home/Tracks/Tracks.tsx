import { TrackCard, TrackIcon } from "./components";

type Props = {
  tracks: Track[];
};

// display tracks section
const Tracks = ({ tracks }: Props) => {
  return (
    <section
      className="bg-gradient-to-r from-[#100A28] to-[#4F3E93] py-10 md:py-24 px-10"
      id="tracks"
    >
      <div className="container mx-auto">
        <h2 className="font-mont font-bold text-3xl lg:text-5xl text-white text-center">
          Tracks
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-x-14 gap-y-14 place-content-center mx-auto max-w-fit">
          {tracks.map((track) => (
            <TrackCard
              key={track.title}
              Logo={<TrackIcon icon={track.logo} />}
              title={track.title}
              description={track.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;
