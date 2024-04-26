import { FaBed } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


export default function HeroSection() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div className="relative flex items-end justify-center">
      <img
        src="https://i.ibb.co/34xMXZn/hero-img.jpg"
        alt="hero-image"
        className="w-full h-auto"
      />

      <div className="flex content-center item-center justify-around w-11/12 h-28 bg-[#FAF9F5] absolute -bottom-10  rounded-md ">
        <div className="relative">
          <h2 className="text-center">PLACE</h2>
          <input
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block w-full rounded-md sm:text-sm focus:ring-1 "
            placeholder="where are you going?"
          />
          <FaBed className="absolute bottom-14 right-2 " />
        </div>

        <div>
          <h2 className="text-center">DATE</h2>
          <div className="relative mt-1 px-3 py-2 bg-white border shadow-sm bordel-black-300 h-10 w-52 cursor-pointer ">
            <FaRegCalendarAlt className="absolute  right-2 " />
            <span className="absolute bottom-2 ">date to date </span>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          </div>
        </div>

        <div>
          <h2 className="text-center">ROOMS</h2>
          <input
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="where are you going?"
          />
          {/* <span>2 adults 2 children 1 room</span> */}
        </div>
        <div>
          <h2 className="text-center">GUESTS</h2>
          <input
            type="text"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-black-300 placeholder-black- focus:outline-none focus:border-[#000] focus:ring-[#000] block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="where are you going?"
          />
        </div>
        <div className="mt-5">
          <button className="mt-1 px-3 py-2 bg-white border shadow-sm bordel-black-300 block w-full rounded-md ">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}
