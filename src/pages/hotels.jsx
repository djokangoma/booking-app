import { format } from "date-fns";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";

export default function Hotels() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div className="flex justify-center mt-20 mb-20">
      <div className="w-full max-w-5xl flex gap-20 ">
        <div className="flex-1 bg-[#F07857] p-1 rounded-xl sticky top-10">
          <h1 className="text-sm mb-10 text-[#FAF9F5] ">Search</h1>
          <div className="flex flex-col gap-1 mb-1">
            <label className="tx-xs text-[#FAF9F5] ">Destination</label>
            <input
              type="text"
              placeholder={destination}
              className="h-8 border-none p-5 bg-[#F0F0F0] text-black text-center "
            />
          </div>
          <div className="flex flex-col gap-1 mb-1">
            <label className="tx-xs text-[#FAF9F5]">Check-in Date</label>
            <span
              className="h-8 p-5  flex items-center cursor-pointer text-black bg-[#F0F0F0] "
              onClick={() => setOpenDate(!openDate)}
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} 
              to ${format(date[0].endDate, "MM/dd/yyyy")}`}
            </span>
            {openDate && (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </div>
          <div className="flex flex-col gap-1 mb-3 text-[#FAF9F5]">
            <label>Options</label>
            <div className="lsoptions p-1">
              <div className="flex justify-between mb-3  tx-xs   ">
                <span className="lsoptiontext text-[#FAF9F5]">
                  Min price <small>par night</small>
                </span>
                <input
                  type="number"
                  className=" w-16 bg-[#F0F0F0] text-black text-center"
                  min={1}
                />
              </div>
              <div className="lsoptionitm flex justify-between mb-3 text[#DEDEDE ] 400 tx-xs">
                <span className="lsoptiontext text-[#FAF9F5]">
                  Max price <small>par night</small>
                </span>
                <input
                  type="number"
                  className="lsoptioninput  w-16 bg-[#F0F0F0] text-black text-center"
                  min={1}
                />
              </div>
              <div className="lsoptionitm flex justify-between mb-3 text-red-400 tx-xs">
                <span className="lsoptiontext text-[#FAF9F5]">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsoptioninput  w-16 bg-[#F0F0F0] text-black text-center"
                  placeholder={options.adulte}
                />
              </div>
              <div className="lsoptionitm flex justify-between mb-3 text-red-400 tx-xs">
                <span className="lsoptiontext text-[#FAF9F5]">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsoptioninput  w-16 bg-[#F0F0F0] text-black text-center "
                  placeholder={options.children}
                />
              </div>
              <div className="lsoptionitm flex justify-between mb-3 text-red-400 tx-xs">
                <span className="lsoptiontext text-[#FAF9F5]">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsoptioninput w-16 bg-[#F0F0F0] text-black text-center "
                  placeholder={options.room}
                />
              </div>
            </div>
          </div>
          <div className="bg-[#191970] p-5 text-white border-none w-full font-medium cursor-pointer">
            {" "}
            Search
          </div>
        </div>
        <div className="flex-3"></div>
      </div>
    </div>
  );
}
