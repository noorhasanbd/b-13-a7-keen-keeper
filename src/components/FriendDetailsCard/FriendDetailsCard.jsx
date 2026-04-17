import React, { useContext } from "react";
import { FiArchive, FiPhoneCall } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import TagsBadge from "../tags/TagsBadge";
import Status from "../status/Status";
import { FriendsContext } from "../../context/FriendsContext";

const FriendDetailsCard = () => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const { friendId: paramsFriendId } = useParams();

  console.log(paramsFriendId, "Param");
  const friends = useLoaderData();

  const selectedFriend = friends.find((f) => f.id === Number(paramsFriendId));

  const {
    name,
    status,
    bio,
    picture,
    tags,
    days_since_contact: daysSinceContact,
    goal,
    next_due_date: nextDueDate,
   email
  } = selectedFriend;

  const { handleAction } = useContext(FriendsContext);

  // console.log(selectedFriend, "Printing from Detail");
  return (
    <div className="container mx-auto px-4 my-8 md:my-16 min-h-screen">
     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <div className="card bg-base-100 shadow-sm md:row-span-2 h-full">
          <div className="card-body text-center flex flex-col items-center">
            <img
              src={picture}
              alt={name}
              className="rounded-full w-32 h-32 object-cover mb-2"
            />
            <h2 className="text-2xl font-semibold text-[#244D3F]">{name}</h2>
            <div className="flex flex-col justify-center items-center space-y-2 mt-2">
              <TagsBadge tags={tags} />
              <Status status={status} />

              <span>"{bio}"</span>
              <span>Preffered: {email}</span>
            </div>
          </div>
        </div>

        
        {[
          { label: "Days Since Contact", value: daysSinceContact },
          { label: "Goal (Days)", value: goal },
          { label: "Next Due", value: formatter.format(new Date(nextDueDate)) },
        ].map((stat, i) => (
          <div key={i} className="card bg-base-100 shadow-sm">
            <div className="card-body text-center">
              <h2 className="text-2xl font-semibold text-[#244D3F]">
                {stat.value}
              </h2>
              <p className="text-[#64748B] font-semibold text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          </div>
        ))}

      
        <div className="card bg-base-100 shadow-sm md:col-span-3">
          <div className="card-body">
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-xl font-semibold text-[#244D3F]">
                Relationship Goal
              </h2>
              <button className="btn btn-sm">Edit</button>
            </div>
            <p className="text-[#64748B] font-semibold text-base">
              Connect every <span className="font-bold">{goal} days</span>
            </p>
          </div>
        </div>

        
        <div className="flex flex-col gap-2 justify-center">
          <button className="btn bg-base-100 justify-start">
            <RiNotificationSnoozeLine /> Snooze 2 weeks
          </button>
          <button className="btn bg-base-100 justify-start">
            <FiArchive /> Archive
          </button>
          <button className="btn bg-base-100 text-error justify-start">
            <RiDeleteBin6Line /> Delete
          </button>
        </div>

       
        <div className="card bg-base-100 shadow-sm md:col-span-3">
          <div className="card-body">
            <h2 className="text-xl font-semibold text-[#244D3F] mb-4">
              Quick Check-In
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { type: "call", icon: <FiPhoneCall />, label: "Call" },
                { type: "text", icon: <LuMessageSquareMore />, label: "Text" },
                { type: "video", icon: <IoVideocamOutline />, label: "Video" },
              ].map((action) => (
                <button
                  key={action.type}
                  className="btn flex flex-row sm:flex-col justify-center items-center py-4 h-auto gap-2"
                  onClick={() => handleAction(action.type, selectedFriend)}
                >
                  <span className="text-xl">{action.icon}</span>
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsCard;
