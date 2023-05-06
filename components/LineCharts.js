import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Week 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    uv: 7000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    uv: 5000,
    pv: 3908,
    amt: 2000,
  },
];

const LineCharts = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <ResponsiveContainer width={920} height={285}>
        <LineChart
          width={920}
          height={285}
          data={data}
          margin={{
            top: 50,
            right: 10,
            left: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 30,
            }}
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#E9A0A0"
            strokeWidth={3}
            activeDot={false}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#9BDD7C"
            strokeWidth={3}
            activeDot={false}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
