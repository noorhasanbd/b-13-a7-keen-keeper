import React, { createContext, use, useState } from "react";
const friendsPromise = fetch("/friends.json").then((res) => res.json());

export const FriendsContext = createContext();


const FriendsProvider = ({children}) => {

  const friends= use(friendsPromise);

  const [actionLog, setActionLog]=useState([])

  const handleAction = (type, selectedFriend) =>{
    const newEntry ={
      id: Date.now(),
      type: type, 
      friend: selectedFriend,
      time: new Date().toLocaleDateString()
    };

    setActionLog([...actionLog, newEntry])
    console.log(actionLog)
  }
  

  const data = {
    friends,
    handleAction,
    actionLog

  };
  
  return <div>

    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  </div>;
};

export default FriendsProvider;
