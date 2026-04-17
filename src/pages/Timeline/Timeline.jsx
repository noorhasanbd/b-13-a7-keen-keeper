import React, { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";
import { IoMdCall } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";

const Timeline = () => {
  const { actionLog } = useContext(FriendsContext);
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  //console.log(actionLog)
  return (
    <div className="bg-[#F8FAFC] py-10 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-[#244D3F] mb-6">Timeline</h2>

        <div className="space-y-3">
          {actionLog.map(({ id, type, friend, time }) => (
            <div
              key={id}
              className="flex flex-row items-center gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm"
            >
              
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-100 text-gray-400">
                {type === "call" && <FiPhoneCall className="text-xl" />}
                {type === "text" && <LuMessageSquareMore className="text-xl" />}
                {type === "video" && <IoVideocamOutline className="text-xl" />}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  
                  <span className="text-lg font-bold text-[#244D3F] capitalize">
                    {type}
                  </span>
                  <span className="text-slate-500 font-medium">
                    with {friend.name}
                  </span>
                </div>
                
                <span className="text-sm text-slate-400">{formatter.format(new Date(time))}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
