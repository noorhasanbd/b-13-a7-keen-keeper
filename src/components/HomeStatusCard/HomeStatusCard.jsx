import React, { useContext } from "react";
import { FriendsContext } from "../../context/FriendsContext";

const HomeStatusCard = () => {
  const { friends, actionLog } = useContext(FriendsContext);

  const totalFriends = friends.length;

  const onTrackCount = friends.filter((f) => f.status === "on-track").length;

  const needsAttentionCount = friends.filter(
    (f) => f.status === "overdue",
  ).length;

  const currentMonth = new Date().getMonth();
  const interactionsThisMonth = actionLog.filter((log) => {
    const logDate = new Date(log.id);
    return logDate.getMonth() === currentMonth;
  }).length;

  const stats = [
    { label: "Total Friends", value: totalFriends },
    { label: "On Track", value: onTrackCount },
    { label: "Need Attention", value: needsAttentionCount },
    { label: "Interactions This Month", value: interactionsThisMonth },
  ];

  return (
    <div className="container mx-auto mt-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="card bg-base-100 w-full max-w-64 shadow-sm border border-slate-100"
          >
            <div className="card-body text-center py-8">
              <h2 className="text-3xl font-bold text-[#244D3F] mb-1">
                {stat.value}
              </h2>
              <p className="text-[#64748B] font-semibold text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeStatusCard;
