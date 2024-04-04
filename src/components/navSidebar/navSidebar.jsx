import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navSidebar.css";

const NavSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="header">
        <div className="logo">Logo</div>
        <button className="toggle-btn" onClick={toggleCollapse}>
          {collapsed ?  "☰" : "✖"}
        </button>
      </div>
      <nav>
        <ul>
          <li
            className={activeItem === "home" ? "active" : ""}
            onClick={() => handleItemClick("home")}
          >
            Home
          </li>
          <li
            className={activeItem === "organization" ? "active" : ""}
            onClick={() => handleItemClick("organization")}
          >
            Organization
          </li>
          <li
            className={activeItem === "assets" ? "active" : ""}
            onClick={() => handleItemClick("assets")}
          >
            Assets
          </li>
          <li
            className={activeItem === "trade" ? "active" : ""}
            onClick={() => handleItemClick("trade")}
          >
            Trade
          </li>
          <li
            className={activeItem === "history" ? "active" : ""}
            onClick={() => handleItemClick("history")}
          >
            History
          </li>
          <li
            className={activeItem === "wallet" ? "active" : ""}
            onClick={() => handleItemClick("wallet")}
          >
            Wallet
          </li>
        </ul>
      </nav>
      <div className="footer">
        <ul>
          <li>{collapsed ? <FontAwesomeIcon icon="fa-solid fa-bell" style={{color: "#fff"}} /> : "Notifications"}</li>
          <li>
            {collapsed ? <i className="fas fa-question-circle" /> : "Support"}
          </li>
          <li>{collapsed ? <i className="fas fa-cog" /> : "Settings"}</li>
        </ul>
      </div>
    </div>
  );
}

export default NavSidebar