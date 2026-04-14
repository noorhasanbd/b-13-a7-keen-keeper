import React from "react";

const FriendCard = () => {
  return (
    <div className="container mx-auto mt-16">
      <div className="grid grild-col-2 md:grid-cols-3 gap-3 justify-items-center">
        <div className="card bg-base-100 w-64 shadow-sm">
          <div className="card-body text-center">
            <div className="flex flex-col justify-center items-center">
              <img src="/public/profile/1.jpg" alt=""  className="rounded-full w-30 h-30"/>

              <h2 className="text-2xl font-semibold text-[#244D3F] text-center">
                62d ago
              </h2>
              <p className="text-[#64748B] font-semibold text-base">
                Total Friends
              </p>
              <div class="badge badge-soft badge-success">Work</div>
              <div class="badge badge-warning">Overdue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
