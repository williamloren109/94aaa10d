// src/components/TabBar.jsx
import React from "react";
import { FaStar, FaClock, FaAddressBook, FaKeyboard } from "react-icons/fa";
import "../css/tabbar.css";

const TabBar = ({ activeTab, setActiveTab }) => (
  <div className="tab-bar">
    <button
      className={activeTab === "recents" ? "active" : ""}
      onClick={() => setActiveTab("recents")}
    >
      <FaClock />
      <span>Recents</span>
    </button>
    <button
      className={activeTab === "contacts" ? "active" : ""}
      onClick={() => setActiveTab("contacts")}
    >
      <FaAddressBook />
      <span>Contacts</span>
    </button>
    <button
      className={activeTab === "keypad" ? "active" : ""}
      onClick={() => setActiveTab("keypad")}
    >
      <FaKeyboard />
      <span>Keypad</span>
    </button>
    <button
      className={activeTab === "favorites" ? "active" : ""}
      onClick={() => setActiveTab("favorites")}
    >
      <FaStar />
      <span>Favorites</span>
    </button>
  </div>
);

export default TabBar;
