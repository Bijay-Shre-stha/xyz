import { EventCard } from "./components";

type Props = {
  currentData: Events;
  setCurrentData: Function;
};

const Events = ({ currentData, setCurrentData }: Props) => {
  return (
    <div className="bg-gradient-to-r from-[#100A28] to-[#4F3E93] py-10 md:py-24 lg:py-32 px-10">
      <div className="container mx-auto">
        <h2 className="font-mont font-bold text-3xl lg:text-5xl text-white text-center">
          Event <span className="text-primary">Schedule</span>
        </h2>
        <div className="mt-16">
          <h3 className="text-center text-white text-xl lg:text-3xl hover:cursor-pointer font-poppins font-semibold">
            <button
              className="px-3"
              onClick={() => {
                setCurrentData(false);
              }}
            >
              &lt;
            </button>
            {currentData.date}
            <button
              className="px-3"
              onClick={() => {
                setCurrentData(true);
              }}
            >
              &gt;
            </button>
          </h3>
          <hr className="h-px my-8 bg-gray-200 border-0" />
          <center>
            <button className="px-10 py-3 font-poppins bg-primary  font-semibold rounded-xl text-xl hover:cursor-default ">
              {currentData.title}
            </button>
          </center>
          <div className="events-section mt-10">
            <EventCard event={currentData.event} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
