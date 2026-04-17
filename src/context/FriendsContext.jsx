import React, { createContext, useState } from "react";

export const FriendsContext = createContext();


const FriendsProvider = ({children}) => {

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
    hi : "Hello",
    handleAction,
    actionLog

  };
  
  return <div>

    <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
  </div>;
};

export default FriendsProvider;
