import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  fetchCalls,
  archiveCall,
  unarchiveCall,
  archiveAll,
  unarchiveAll,
} from "./api.js";
import Header from "./components/Header.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import CallDetails from "./components/CallDetails.jsx";
import TabBar from "./components/TabBar.jsx";
import Settings from "./components/Settings.jsx";

import "./css/app.css";

const App = () => {
  const [calls, setCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);
  const [activeTab, setActiveTab] = useState("recents");
  const [activeHeaderTab, setActiveHeaderTab] = useState("active");

  useEffect(() => {
    loadCalls();
  }, [fetchCalls]);

  const loadCalls = async () => {
    const allCalls = await fetchCalls();
    setCalls(allCalls);
  };

  const handleArchive = async (id) => {
    await archiveCall(id);
    loadCalls();
  };

  const handleUnarchive = async (id) => {
    await unarchiveCall(id);
    loadCalls();
  };

  const handleArchiveAll = async () => {
    const activeCalls = calls.filter((call) => !call.is_archived);
    await archiveAll(activeCalls);
    await loadCalls();
  };

  const handleUnarchiveAll = async () => {
    const archivedCalls = calls.filter((call) => call.is_archived);
    await unarchiveAll(archivedCalls);
    await loadCalls();
  };

  return (
    <div className="app-container">
      <div className="content">
        {activeTab === "recents" && (
          <>
            <Header
              activeTab={activeHeaderTab}
              setActiveTab={setActiveHeaderTab}
            />
            <div className="content-container">
              {activeHeaderTab === "active" && (
                <ActivityFeed
                  isActive={true}
                  calls={calls}
                  onSelectCall={setSelectedCall}
                  onArchiveAll={handleArchiveAll}
                />
              )}
              {activeHeaderTab === "archived" && (
                <ActivityFeed
                  isActive={false}
                  calls={calls}
                  onSelectCall={setSelectedCall}
                  onUnarchiveAll={handleUnarchiveAll}
                />
              )}
              {activeHeaderTab === "settings" && (
                <Settings loadCalls={loadCalls} />
              )}
            </div>
          </>
        )}
        {selectedCall && (
          <CallDetails
            call={selectedCall}
            onClose={() => setSelectedCall(null)}
            onArchive={handleArchive}
            onUnarchive={handleUnarchive}
          />
        )}
      </div>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
