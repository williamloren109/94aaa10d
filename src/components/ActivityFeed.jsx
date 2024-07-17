import React from "react";
import CallItem from "./CallItem.jsx";
import "../css/activityfeed.css";

const groupCallsByDate = (calls) => {
  const grouped = {};
  calls.forEach((call) => {
    const date = new Date(call.created_at).toDateString();
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date] = [call, ...grouped[date]];
  });
  return grouped;
};

const ActivityFeed = ({
  isActive,
  calls,
  onArchiveAll,
  onUnarchiveAll,
  onSelectCall,
}) => {
  const groupedCalls = groupCallsByDate(
    isActive
      ? calls.filter((call) => !call.is_archived)
      : calls.filter((call) => call.is_archived)
  );

  return (
    <div className="feed-panel">
      <div className="activity-feed">
        <div className="call-list">
          <button
            className="archive-all-btn"
            onClick={isActive ? onArchiveAll : onUnarchiveAll}
          >
            {isActive ? "Archive All" : "Unarchive All"}
          </button>
        </div>
      </div>
      <div className="activity-feed">
        {Object.entries(groupedCalls)
          .sort((a, b) => new Date(b[0]) - new Date(a[0]))
          .map(([date, dateCalls]) => (
            <div key={date}>
              <div className="date-divider">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </div>
              <ul className="call-list">
                {dateCalls.map((call) => {
                  return (
                    <CallItem
                      key={call.id}
                      call={call}
                      onSelect={() => onSelectCall(call)}
                    />
                  );
                })}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ActivityFeed;
