"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { useContact } from "@/context/ContextProvider";

const COLORS = {
  message: "#7C3AED", // purple
  call: "#1F2937", // dark gray
  video: "#22C55E", // green
};

const StatsPage = () => {
  const { logs } = useContact();

  if (!logs?.length) return null;

  const chartData = ["message", "call", "video"].map((type) => ({
    name: type,
    value: logs.filter((log) => log.contactType === type).length,
  }));

  return (
    <div className="w-2/4 mx-auto">
      <h1 className="text-3xl font-bold">Friendship Analysis</h1>

      <div className="mt-15 mb-15 w-full mx-auto h-[320px] flex flex-col items-center justify-center rounded-md shadow-md p-6">
        <div>
          <p className="text-green-900 font-semibold">By interaction type</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={70} // makes it donut
              outerRadius={100} // thickness
              paddingAngle={6} // gap between segments (important for look)
              stroke="white" // clean separation like your image
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[entry.name]} />
              ))}
            </Pie>

            <Tooltip />

            <Legend verticalAlign="bottom" iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default StatsPage;
