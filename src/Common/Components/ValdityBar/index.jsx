import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Validity", value: 6 }, // Representing your green bar
];

const ValdityBar = ({className}) => {
  return (
    <div className={className}>
    <label>Rules against target</label>
    <ResponsiveContainer width="100%" height={100}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 10, right: 30, left: 10, bottom: 10 }}
      >
        <CartesianGrid horizontal={false} strokeDasharray="3 3" />
        <XAxis
          type="number"
          domain={[0, 8]} // Set max value to 8 based on your image
          tickCount={9} // Display 9 ticks for a clean range
        />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fontSize: 12 }}
          axisLine={false}
        />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Bar dataKey="value" fill="#00C49F" background={{ fill: "#F3F3F3" }} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};


export default ValdityBar