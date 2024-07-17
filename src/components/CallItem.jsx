import React from "react";
import { getIcon } from "../utils/icon";
import "../css/callitem.css";

const CallItem = ({ call, onSelect }) => {
  return (
    <li className="call-item" onClick={() => onSelect(call)}>
      {getIcon(call)}
      <div className="call-details">
        <p className="call-from">+{call.from}</p>
        <p className="call-to">Tried to call on {call.to}</p>
      </div>
      <p className="call-time">
        {new Date(call.created_at).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}
      </p>
    </li>
  );
};

export default CallItem;
