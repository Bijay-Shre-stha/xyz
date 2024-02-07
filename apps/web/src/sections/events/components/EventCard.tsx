type Props = {
  event: Events["event"];
};

const EventCard = ({ event }: Props) => {
  return (
    <>
      {event.map((item) => {
        return (
          <div
            className="relative flex place-items-center my-5 md:my-10 h-[5em] item ml-4 item font-poppins "
            key={item.id}
          >
            <span className="absolute left-[-20px] mt-7 bg-primary  rounded-full  w-[35px] h-[35px] md:w-[40px] md:h-[40px] flex place-items-center justify-center">
              <p className="font-semibold text-base lg:text-xl font-poppins">
                {item.id}
              </p>
            </span>
            <div className="w-full flex flex-col  ">
              <div className="eventbox relative pl-[10vw] py-3  text-base lg:text-xl font-medium font-poppins md:pl-[4vw]">
                <div className="event-time text-white px-2  ">
                  {item.start_time}
                </div>
                <div className="event-description px-5 py-3  w-full   rounded-xl bg-primary ">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default EventCard;
