import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { hour: "12 AM", value: 10 },
  { hour: "1 AM", value: 20 },
  { hour: "2 AM", value: 50 },
  { hour: "3 AM", value: 20 },
  { hour: "4 AM", value: 70 },
  { hour: "5 AM", value: 90 },
  { hour: "6 AM", value: 20 },
  { hour: "7 AM", value: 10 },
  { hour: "8 AM", value: 50 },
  { hour: "9 AM", value: 90 },
  { hour: "10 AM", value: 50 },
  { hour: "11 AM", value: 30 },
  { hour: "12 PM", value: 40 },
  { hour: "1 PM", value: 30 },
  { hour: "2 PM", value: 50 },
  { hour: "3 PM", value: 45 },
  { hour: "4 PM", value: 70 },
  { hour: "5 PM", value: 120 },
  { hour: "6 PM", value: 90 },
  { hour: "7 PM", value: 50 },
  { hour: "8 PM", value: 80 },
  { hour: "9 PM", value: 30 },
  { hour: "10 PM", value: 50 },
  { hour: "11 PM", value: 100 },
];

const SimpleAreaChart = () => {
  return (
    <ResponsiveContainer width={800} height={234}>
      <AreaChart data={data}>
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#1F6E8C" fill="#FF8551" />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default SimpleAreaChart;
