const getAllActionLogsFromLocalDB = ()=> {
    const allActionLogs=localStorage.getItem("actionLogs")

   return allActionLogs ? JSON.parse(allActionLogs) : [];
};

const addAllActionLogsToLocalDB = (logs)=>{

    localStorage.setItem("actionLogs", JSON.stringify(logs));

}

export {getAllActionLogsFromLocalDB, addAllActionLogsToLocalDB}; 