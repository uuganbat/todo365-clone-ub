import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./Sidebar";

export default function Content() {
  return (
    <Router>
      <div className="content-container">
        <Sidebar />
      </div>
    </Router>
  );
}
