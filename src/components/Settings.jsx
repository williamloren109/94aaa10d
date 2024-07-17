import React from "react";
import { FaUndo } from "react-icons/fa";
import { resetCalls } from "../api.js";

import "../css/settings.css";

const Settings = ({ loadCalls }) => {
  const handleReset = async () => {
    resetCalls().then(() => {
      loadCalls();
      alert("All calls have been reset.");
    });
  };

  return (
    <div className="settings">
      <button className="reset-button" onClick={handleReset}>
        <FaUndo />
        Reset All Calls
      </button>
    </div>
  );
};

export default Settings;
