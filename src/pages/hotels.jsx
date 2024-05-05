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
          <div className="flex flex-col gap-5 mb-10">
            <label className="tx-xs text-[#FAF9F5] ">Destination</label>
            <input
              type="text"
              placeholder={destination}
              className="h-7 border-none p-5 bg-[#F0F0F0] text-black text-center "
            />
          </div>
          <div className="flex flex-col gap-5 mb-10">
            <label className="tx-xs text-[#FAF9F5]">Check-in Date</label>
            <span
              className="h-28 p-5  flex items-center cursor-pointer text-[#FAF9F5]"
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
          <div className="flex flex-col gap-5 mb-10 text-[#FAF9F5]">
            <label>Options</label>
            <div className="lsoptions p-10">
              <div className="lsoptionitm flex justify-between mb-10  tx-xs   ">
                <span className="lsoptiontext text-[#FAF9F5]">
                  Min price <small>par night</small>
                  <input
                    type="number"
                    className="lsoptioninput w-20 bg-[#F0F0F0] text-black text-center"
                  />
                </span>
              </div>
              <div className="lsoptionitm flex justify-between mb-10 text[#DEDEDE ] 400 tx-xs">
                <span className="lsoptiontext text-[#FAF9F5]">
                  Max price <small>par night</small>
                  <input
                    type="number"
                    className="lsoptioninput  w-20 bg-[#F0F0F0] text-black text-center"
                  />
                </span>
              </div>
              <div className="lsoptionitm flex justify-between mb-10 text-red-400 tx-xs">
                <span className="lsoptiontext text-[#FAF9F5]">
                  Adult
                  <input
                    type="number"
                    min={1}
                    className="lsoptioninput  w-20 bg-[#F0F0F0] text-black text-center"
                    placeholder={options.adulte}
                  />
                </span>
              </div>
              <div className="lsoptionitm flex justify-between mb-10 text-red-400 tx-xs">
                <span className="lsoptiontext text-[#FAF9F5]">
                  Children
                  <input
                    type="number"
                    min={0}
                    className="lsoptioninput  w-20 bg-[#F0F0F0] text-black text-center "
                    placeholder={options.children}
                  />
                </span>
              </div>
              <div className="lsoptionitm flex justify-between mb-10 text-red-400 tx-xs">
                <span className="lsoptiontext text-[#FAF9F5]">
                  Room
                  <input
                    type="number"
                    min={1}
                    className="lsoptioninput w-20 bg-[#F0F0F0] text-black text-center "
                    placeholder={options.room}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#191970] p-10 text-white border-none w-full font-medium cursor-pointer">
            {" "}
            Search
          </div>
        </div>
        <div className="flex-3"></div>
      </div>
    </div>
  );
}
