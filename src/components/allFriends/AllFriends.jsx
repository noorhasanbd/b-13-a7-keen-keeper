import React, { Suspense, use, useContext } from "react";
import FriendCard from "../FriendsCard/FriendCard";
import { FriendsContext } from "../../context/FriendsContext";
//const friendsPromise = fetch("/friends.json").then((res) => res.json());

const AllFriends = () => {
  // const friends = use(friendsPromise);
  const { friends } = useContext(FriendsContext);

  return (
    <Suspense
      fallback={<span className="loading loading-ring loading-xl"></span>}
    >
      <div>
        <div className="container mx-auto grid justify-center my-16">
          <h2 className="text-3xl font-bold my-6">All Friends</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center gap-8">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default AllFriends;
