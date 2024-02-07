type Track = {
  logo: string;
  title: string;
  description: string;
};
type CarouselCard = {
  link: string;
  img: string;
  name: string;
  role: string;
};
type Prize = {
  icon: string;
  title: string;
  description: string;
  prize: string;
  prize_text?: string;
};

type EventData = {
  id: number;
  start_time: string;
  end_time: string;
  description: string;
};
type Events = {
  date: string;
  title: string;
  event: EventData[];
};

type PrizeCategory = {
  category: string;
  prize: Prize;
};

type Faq = {
  question: string;
  answer: string;
};

type Sponsor = {
  name: string;
  logo: string;
  link: string;
};

type SponsorGroup = {
  title: string;
  sponsors: Sponsor[];
};

type PageData = {
  socialLinks: {
    facebook: string;
    instagram: string;
    discord: string;
    linkedin: string;
  };
  registerForm: string;
  contactEmail: string;
};

type TeamMember = {
  name: string;
  linkedin: string;
  image: string;
  rowspan: boolean;
};

type Team = {
  title: string;
  members: TeamMember[];
};

type NetworkData = {
  currentEvent: string;
  upcomingEvent: string;
  upcomingEventTime: string;
}
