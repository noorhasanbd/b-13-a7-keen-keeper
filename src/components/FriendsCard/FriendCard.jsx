import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  const {
    name,
    id,
    email,
    status,
    next_due_date: nextDueDate,
    days_since_contact: daysSinceContact,
    tags,
  } = friend;
  return (
    <Link >
      <div className="card bg-base-100 w-64 shadow-sm">
        <div className="card-body text-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={`/public/profile/${id}.jpg`}
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
              <div class="badge badge-soft badge-success">{status}</div>
              <div class="badge badge-warning">{status}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
