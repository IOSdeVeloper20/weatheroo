import { IoMdClock } from "react-icons/io";
import { getCurrentDayAndTime } from "../../Helpers/Date";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [dateTime, setDateTime] = useState({ dayOfTheWeek: "", time: "" });
  const locale = "en-US";

  useEffect(() => {
    const updateTime = () => {
      const { dayOfTheWeek, time } = getCurrentDayAndTime(locale);
      setDateTime({ dayOfTheWeek, time });
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full text-white">
      <div className="text-center font-bold">
        <Link
          to="/"
          className="text-2xl sm:text-3xl text-white hover:text-gray-200">
          Weatheroo
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <IoMdClock className="text-gray-200" />
        <p>
          {dateTime.dayOfTheWeek} {dateTime.time}
        </p>
      </div>
    </div>
  );
};

export default Header;
