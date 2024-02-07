import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <li className="hover:text-primary">
        <Link href="/#about" scroll={false}>
          About
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/#tracks" scroll={false}>
          Tracks
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/#prizes" scroll={false}>
          Prizes
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/#judges" scroll={false}>
          Judges
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/#mentors" scroll={false}>
          Mentors
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/#faq" scroll={false}>
          FAQ
        </Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/schedule">Schedule</Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/organizer">Organizers</Link>
      </li>
      <li className="hover:text-primary">
        <Link href="/winners">Winners</Link>
      </li>
      <li className="group relative">
        <span className="group-hover:text-primary">Resources</span>
        <div className="hidden group-hover:block absolute pt-5 right-0">
          <ul className="bg-[#4B64A3] w-max">
            <li className="hover:text-primary py-3 px-4">
              <Link href={"/code-of-conduct"}>Code of Conduct</Link>
            </li>
            <li className="hover:text-primary py-3 px-4">
              <Link href="/resources/participants.pdf">Participants</Link>
            </li>
            <li className="hover:text-primary py-3 px-4">
              <Link href="/resources/judging_criteria.pdf">
                Judging Criteria
              </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

export default NavLinks;
