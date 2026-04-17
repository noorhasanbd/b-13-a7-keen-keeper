import React from "react";

const Status = ({status}) => {
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
    <div className={`badge text-white ${getStatusColor(status)} p-2 px-2 py-3`}>
      {status.toUpperCase()}
    </div>
  );
};

export default Status;
