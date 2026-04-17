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
  message: "#7C3AED",
  call: "#1F2937",
  video: "#22C55E",
};

const StatsPage = () => {
  const { logs } = useContact();

  if (!logs?.length) return null;

  const chartData = ["message", "call", "video"].map((type) => ({
    name: type,
    value: logs.filter((log) => log.contactType === type).length,
  }));

  return (
    <div className="w-full px-4 sm:px-6 lg:w-2/4 mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
        Friendship Analysis
      </h1>

      <div className="mt-8 sm:mt-12 mb-10 w-full h-[300px] sm:h-[350px] flex flex-col items-center justify-center rounded-md shadow-md p-4 sm:p-6 bg-white">
        <p className="text-green-900 font-semibold text-sm sm:text-base mb-2">
          By interaction type
        </p>

        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius="55%"
                outerRadius="70%"
                paddingAngle={5}
                stroke="white"
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[entry.name]} />
                ))}
              </Pie>

              <Tooltip />

              <Legend
                verticalAlign="bottom"
                iconType="circle"
                wrapperStyle={{
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
