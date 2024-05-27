import { FaBed } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { FaPerson } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState();
  const [options, setOptions] = useState({
    adulte: 1,
    children: 0,
    room: 1,
  });

  const handeleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handeleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="relative flex items-end justify-center">
      <img
        src="https://res.cloudinary.com/dgkxaq4lh/image/upload/v1713536449/eh2eqdfv680qqqzib8mo.jpg"
        alt="hero-image"
        className="w-full h-auto"
      />

      <div className="flex content-center item-center justify-around w-11/12 h-28 bg-[#faf9f5] absolute -bottom-10  rounded-md ">
        <div className="relative">
          <h2 className="text-center">PLACE</h2>
          <input
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block w-full rounded-md sm:text-sm focus:ring-1 "
            placeholder="where are you going?"
            onChange={(e) => setDestination(e.target.value)}
          />
          <FaBed className="absolute bottom-14 right-2 " />
        </div>

        <div>
          <h2 className="text-center">DATE</h2>
          <div className="relative mt-1 px-3 py-2 bg-white border shadow-sm bordel-black-300 h-10 w-60 cursor-pointer z-20 ">
            <FaRegCalendarAlt className="absolute  right-2 " />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="absolute bottom-2 "
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} 
              to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="absolute top-8 left-0"
                minDate={new Date()}
              />
            )}
          </div>
        </div>

        <div>
          <h2 className="text-center">GUESTS & ROOMS</h2>
          <div className="relative mt-1 px-3 py-2 bg-white border shadow-sm bordel-black-300 h-10 w-60 cursor-pointer z-20 ">
            <FaPerson className="absolute right-1 " />
            <span onClick={() => setOpenOptions(!openOptions)}>
              {` ${options.adulte} adulte . ${options.children} children . ${options.room} room`}{" "}
            </span>
          </div>

          {openOptions && (
            <div className="absolute -bottom-17 bg-white w-60 ">
              <div className="flex justify-around m-1">
                <span>Adulte</span>
                <div className="flex items-center gap-2 ">
                  <button
                    disabled={options.adulte <= 1}
                    onClick={() => handeleOption("adulte", "d")}
                    className="bg-white size-8 border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block sm:text-sm focus:ring-1 "
                  >
                    -
                  </button>
                  <span>{options.adulte} </span>
                  <button
                    onClick={() => handeleOption("adulte", "i")}
                    className="bg-white size-8 border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block sm:text-sm focus:ring-1 "
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-around  m-2">
                <span>children</span>
                <div className="flex items-center gap-2 ">
                  <button
                    disabled={options.children <= 0}
                    onClick={() => handeleOption("children", "d")}
                    className="bg-white size-8 border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block sm:text-sm focus:ring-1 "
                  >
                    -
                  </button>
                  <span>{options.children} </span>
                  <button
                    onClick={() => handeleOption("children", "i")}
                    className="bg-white size-8 border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block sm:text-sm focus:ring-1 "
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-around  m-2">
                <span>Room</span>
                <div className="flex items-center gap-2 ">
                  <button
                    disabled={options.room <= 1}
                    onClick={() => handeleOption("room", "d")}
                    className="bg-white size-8 border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block sm:text-sm focus:ring-1 "
                  >
                    -
                  </button>
                  <span>{options.room} </span>
                  <button
                    onClick={() => handeleOption("room", "i")}
                    className="bg-white size-8 border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block sm:text-sm focus:ring-1 "
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <button
            className="mt-1 px-3 py-2 bg-[#f07857] text-white border shadow-sm bordel-black-300 block w-full rounded-md "
            onClick={handeleSearch}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
