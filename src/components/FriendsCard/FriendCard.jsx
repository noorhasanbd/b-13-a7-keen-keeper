import React, { useContext } from "react";
import { Link } from "react-router";
import TagsBadge from "../tags/TagsBadge";
import Status from "../status/Status";
import { FriendsContext } from "../../context/FriendsContext";

const FriendCard = ({ friend }) => {

  
  const {
    name,
    id,
    email,
    status,
    next_due_date: nextDueDate,
    days_since_contact: daysSinceContact,
    tags,
    picture
  } = friend;
  const getStatusColor = (status) => {
    let color;

    if (status === "overdue") {
      color = "bg-[#EF4444]";
    } else if (status === "almost due") {
      color = "bg-[#EFAD44]";
    } else if (status === "on-track") {
      color = "bg-[#244D3F]";
    } else {
      color = "bg-[#999999]"; // Default gray
    }

    return color;
  };

  return (
    <Link to={`/friendsdetail/${id}`}>
      <div className="card bg-base-100 w-64 shadow-sm">
        <div className="card-body text-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={picture}
              alt=""
              className="rounded-full w-32 h-32 object-cover"
            />

            <h2 className="text-2xl font-semibold text-[#244D3F] text-center">
              {name}
            </h2>

            <p className="text-[#64748B] font-semibold text-base">
              {daysSinceContact}d ago
            </p>
            <div className="flex flex-col justify-center items-center space-y-2">
              <TagsBadge tags={tags} />
              <Status status={status} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
