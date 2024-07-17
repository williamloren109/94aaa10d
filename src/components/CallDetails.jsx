import React from "react";
import {
  PiXCircle,
  PiArchive,
} from "react-icons/pi";
import { getIcon } from "../utils/icon";
import "../css/calldetails.css";

const CallDetails = ({ call, onClose, onArchive, onUnarchive }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleArchiveToggle = () => {
    if (call.is_archived) {
      onUnarchive(call.id);
    } else {
      onArchive(call.id);
    }
    onClose();
  };

  return (
    <div className="call-details-overlay" onClick={handleOverlayClick}>
      <div className="call-details-modal">
        <div className="call-header">
          <div className="call-from">
            <span>{getIcon(call)}</span>
            <span>+{call.from}</span>
          </div>
          <button className="close-btn" onClick={onClose}>
            <PiXCircle />
          </button>
        </div>
        <div className="call-body">
          <div className="call-icon-container"></div>
          <p className="call-type">{call.call_type} call</p>
          <div className="call-info">
            <p>
              <span>To:</span> +{call.to}
            </p>
            <p>
              <span>Duration:</span> {call.duration} seconds
            </p>
            <p>
              <span>Via:</span> +{call.via}
            </p>
            <p>
              <span>Date:</span> {new Date(call.created_at).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="call-actions">
          <button className="archive-toggle-btn" onClick={handleArchiveToggle}>
            {call.is_archived ? <PiArchive /> : <PiArchive />}
            <span>{call.is_archived ? "Unarchive" : "Archive"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallDetails;
