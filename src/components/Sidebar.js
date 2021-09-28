import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SidebarHeader from "./SidebarHeader";

import MyDay from "./pages/MyDay";
import Important from "./pages/Important";
import Planned from "./pages/Planned";
import AssignToMe from "./pages/AssignToMe";
import Flagged from "./pages/Flagged";
import Tasks from "./pages/Tasks";

const sidebarMenus = [
  { id: "myday", name: "My Day", icon: "light_mode" },
  { id: "important", name: "Important", icon: "star_border" },
  { id: "planned", name: "Planned", icon: "calendar_today" },
  { id: "assigned_to_me", name: "Assigned to me", icon: "person" },
  { id: "flagged", name: "Flagged email", icon: "flag" },
  { id: "tasks", name: "Tasks", icon: "home" },
];

export default function Sidebar() {
  const [isExpand, setIsExpand] = useState(false);
  const style = {};
  const textStyle = {};

  style.width = isExpand ? "290px" : "50px";
  textStyle.opacity = isExpand ? 1 : 0;

  return (
    <Router>
      <div className="sidebar" style={style}>
        <div className="sidebar-items">
          <SidebarHeader isExpand={isExpand} setIsExpand={setIsExpand} />
        </div>
        <div className="sidebar-items">
          <ul>
            {sidebarMenus.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.id}>
                  <span className="material-icons">{menu.icon}</span>
                  <span className="text" style={textStyle}>
                    {menu.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Switch>
        <Route path="/myday">
          <MyDay />
        </Route>
        <Route path="/important">
          <Important />
        </Route>
        <Route path="/planned">
          <Planned />
        </Route>
        <Route path="/assigned_to_me">
          <AssignToMe />
        </Route>
        <Route path="/flagged">
          <Flagged />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
      </Switch>
    </Router>
  );
}
