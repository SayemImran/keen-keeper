"use client";

import { useContact } from "@/context/ContextProvider";


const TimelinePage = () => {
  const { logs } = useContact(); // ← get logs from context, not props

  return (
    <div>
      <h1>This is the Timeline Page</h1>
      {logs.length === 0 ? (
        <p>No contacts logged yet.</p>
      ) : (
        <ul>
          {logs.map((log, index) => (
            <li key={index}>
              {log.name} - {log.contactType} -{" "}
              {new Date(log.dateTime).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimelinePage;
