import React from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from "recharts";

const PieChartComponent = () => {
  const { pieChartData } = useSelector((data) => data.dashboardSlice);
  console.log(pieChartData);
  const pieData = pieChartData.map((res, i) => {
    return {
      name: res.label,
      value: res.value,
    };
  });

  const COLORS = ["#2E7D32", "#4CAF50", "#66BB6A", "#81C784", "#A5D6A7"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* color indicatory  */}
    </div>
  );
};

export default PieChartComponent;
