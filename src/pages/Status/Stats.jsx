import React, { useContext } from "react";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { FriendsContext } from "../../context/FriendsContext";



export default function FriendStatsChart() {
    const {actionLog}= useContext(FriendsContext);

    const chartData= [
        
        {
            name: "Calls",
            value: actionLog.filter(log=>log.type==='call').length,
            fill: "#244D3F"
        },
        {
            name: "Texts",
            value: actionLog.filter(log=>log.type==='text').length,
            fill: "#7F37F5"
        },
        
        
        {
            name: "Video",
            value: actionLog.filter(log=>log.type==='video').length,
            fill: "#37A163"
        },

    ]
  return (
    <div className="container mx-auto my-20">
      <div className=" w-full h-100">
        <h2 className="text-xl font-bold text-[#244D3F] mb-4">
          Friendship Analytics
        </h2>

        <div className="bg-white h-full p-4">
            <h3 className="text-md font-semibold">By Interaction Type</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius="70%" 
                outerRadius="100%"
                cornerRadius={10} 
                paddingAngle={5} 
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} wrapperStyle={{ 
    paddingTop: "10px", align: "center" 
  }}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
