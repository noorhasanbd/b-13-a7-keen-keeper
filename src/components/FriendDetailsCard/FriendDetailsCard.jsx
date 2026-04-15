import React from "react";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";

const FriendDetailsCard = () => {
  return (
    <div className="container mx-auto grid justify-center">
      <div className="grid grid-cols-4 grid-rows-3 gap-3 justify-center">
        <div className="card bg-base-100 w-64 shadow-sm grid row-span-2">
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold text-[#244D3F] text-center">
              10
            </h2>
            <p className="text-[#64748B] font-semibold text-base">
              Total Friends
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-64 shadow-sm">
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold text-[#244D3F] text-center">
              10
            </h2>
            <p className="text-[#64748B] font-semibold text-base">
              Days Since Contact
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-64 shadow-sm">
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold text-[#244D3F] text-center">
              10
            </h2>
            <p className="text-[#64748B] font-semibold text-base">
              Goal (Days)
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-64 shadow-sm">
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold text-[#244D3F] text-center">
              Feb 27, 2026
            </h2>
            <p className="text-[#64748B] font-semibold text-base">Next Due</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm grid col-span-3">
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold text-[#244D3F] text-center">
              Relationship Goal
            </h2>
            <p className="text-[#64748B] font-semibold text-base">
              Connect every <span className="font-bold">30 days</span>
            </p>
          </div>
        </div>
        <div className="w-64 shadow-sm flex flex-col gap-2 text-[#244D3F]">
          <button className="btn bg-base-100">
            <RiNotificationSnoozeLine />
            Snooze 2 weeks
          </button>
          <button className="btn bg-base-100">
            <FiArchive /> Archive
          </button>
          <button className="btn bg-base-100 text-error">
            <RiDeleteBin6Line /> Delete
          </button>
        </div>
        <div className="card bg-base-100 shadow-sm grid col-span-3">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-[#244D3F] ">
              Quick Check-In
            </h2>
            <div className="grid grid-cols-3 justify-items-center">
              <button className="btn flex flex-col justify-center items-center py-2 px-16 h-auto">
                <FiPhoneCall className="text-xl mb-1" />
                <span>Call</span>
              </button>
              <button className="btn flex flex-col justify-center items-center py-2 px-16 h-auto">
                <FiPhoneCall className="text-xl mb-1" />
                <span>Call</span>
              </button>
              <button className="btn flex flex-col justify-center items-center py-2 px-16 h-auto">
                <FiPhoneCall className="text-xl mb-1" />
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsCard;
