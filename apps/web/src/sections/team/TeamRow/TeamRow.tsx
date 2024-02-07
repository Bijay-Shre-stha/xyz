import { TeamCard } from "@/components/TeamCard";

type Props = {
  team: Team;
};
const TeamRow = ({ team }: Props) => {
  const title = team.title.split(" ");
  const firstPart =
    title.length > 1 ? title.slice(0, title.length - 1).join(" ") : team.title;
  let secondPart = "";
  if (title.length > 1) {
    secondPart = title[title.length - 1];
  }
  return (
    <div className="border-b-2 border-b-white mt-16">
      <h2 className="text-3xl lg:text-4xl text-white font-bold text-center lg:text-start">
        {firstPart}
        {secondPart && <span className="text-primary"> {secondPart}</span>}
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap py-14">
        {team.members.map((member, i) => (
          <TeamCard member={member} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TeamRow;
