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
  {
    name: "5",
    amt: 3000,
  },
  {
    name: "9",
    amt: 9000,
  },
  {
    name: "11",
    amt: 4000,
  },
  {
    name: "13",
    amt: 5000,
  },
  {
    name: "15",
    amt: 4000,
  },
  {
    name: "17",
    amt: 10000,
  },
  {
    name: "19",
    amt: 12000,
  },
  {
    name: "21",
    amt: 5000,
  },
  {
    name: "23",
    amt: 5000,
  },
  {
    name: "25",
    amt: 10000,
  },
  {
    name: "27",
    amt: 12000,
  },
  {
    name: "29",
    amt: 4000,
  },
  {
    name: "31",
    amt: 10000,
  },
  {
    name: "33",
    amt: 12000,
  },
  {
    name: "35",
    amt: 5000,
  },
];

const formatYAxis = (tickItem) => {
  if (tickItem >= 1000) {
    return `${tickItem / 1000}k`;
  }
  return tickItem;
};

const CustomBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis axisLine={false} tickFormatter={formatYAxis} />
        <Tooltip />
        {/* <Legend /> */}
        <Bar
          dataKey="amt"
          fill="#8884d8"
          radius={[10, 10, 10, 10]}
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
