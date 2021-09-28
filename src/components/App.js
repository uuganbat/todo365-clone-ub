import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./Navbar";
import Content from "./Content";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Content />
    </React.Fragment>
  );
}
