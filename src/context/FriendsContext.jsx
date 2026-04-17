import React, { createContext, use, useState } from "react";
import { toast } from "react-toastify";
import {addAllActionLogsToLocalDB, getAllActionLogsFromLocalDB} from '../utils/localDB'
const friendsPromise = fetch("/friends.json").then((res) => res.json());

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const friends = use(friendsPromise);

  const [actionLog, setActionLog] = useState(()=>getAllActionLogsFromLocalDB());

  const handleAction = (type, selectedFriend) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      friend: selectedFriend,
      time: new Date().toLocaleDateString(),
    };

    
    
    const updatedLog =  [...actionLog, newEntry]; 

    addAllActionLogsToLocalDB(updatedLog);

    const actionLabel =
      type === "video"
        ? "Video Calling"
        : type.charAt(0).toUpperCase() + type.slice(1) + "ing";
    toast.success(`${actionLabel} ${selectedFriend.name}`);
    // console.log(actionLog);
    setActionLog([...actionLog, newEntry]);
  };

  const data = {
    friends,
    handleAction,
    actionLog,
  };

  return (
    <div>
      <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
    </div>
  );
};

export default FriendsProvider;
