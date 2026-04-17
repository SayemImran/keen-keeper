"use client";

import { useState } from "react";
import { Phone, Video, MessageSquare, Users, Clock } from "lucide-react";
import { useContact } from "@/context/ContextProvider";

const filterOptions = [
  { label: "All", value: "all", icon: <Clock size={14} /> },
  { label: "Call", value: "call", icon: <Phone size={14} /> },
  { label: "Video", value: "video", icon: <Video size={14} /> },
  { label: "Message", value: "message", icon: <MessageSquare size={14} /> },
];

const typeConfig = {
  call: {
    icon: <Phone size={18} />,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    label: "Call",
  },
  video: {
    icon: <Video size={18} />,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    label: "Video",
  },
  message: {
    icon: <MessageSquare size={18} />,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    label: "Message",
  },
  meetup: {
    icon: <Users size={18} />,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    label: "Meetup",
  },
};

const TimelinePage = () => {
  const { logs } = useContact();
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? logs
      : logs.filter((log) => log.contactType === activeFilter);

  return (
    <div className="w-4/8 mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Timeline</h1>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filterOptions.map(({ label, value, icon }) => (
          <button
            key={value}
            onClick={() => setActiveFilter(value)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm border transition-all duration-150 ${
              activeFilter === value
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
            }`}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>

      {/* Log List */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-400 py-16 text-sm">
          No entries found.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map((log, index) => {
            const config = typeConfig[log.contactType] ?? typeConfig.meetup;
            return (
              <div
                key={index}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 hover:border-gray-200 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${config.iconBg} ${config.iconColor}`}
                >
                  {config.icon}
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {config.label}{" "}
                    <span className="font-normal text-gray-500">
                      with {log.name}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {new Date(log.dateTime).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default TimelinePage;
