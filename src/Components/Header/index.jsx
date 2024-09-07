import { IoMdClock } from "react-icons/io";
import { getCurrentDayAndTime } from "../../Helpers/Date";
import { Link } from "react-router-dom";

const Header = () => {
  const locale = "en-US";
  const { dayOfTheWeek, time } = getCurrentDayAndTime(locale);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full text-white">
      <div className="text-center font-bold">
        {/* <h1 className="text-2xl sm:text-3xl text-white">Weatheroo</h1> */}
        <Link to="/" className="text-2xl sm:text-3xl text-white">Weatheroo</Link>
      </div>

      <div className="flex items-center gap-2">
        <IoMdClock className="text-gray-200" />
        <p>
          {dayOfTheWeek} {time}
        </p>
      </div>
    </div>
  );
};

export default Header;
