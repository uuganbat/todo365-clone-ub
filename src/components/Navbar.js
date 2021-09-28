import React from "react";
import SearchForm from "./SearchForm";

const icons = [
  { key: "settings", val: "settings" },
  { key: "help_outline", val: "help_outline" },
  { key: "event", val: "event" },
  { key: "account_circle", val: "account_circle" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <div className="navbar-item-icons">
          <span className="material-icons">apps</span>
        </div>
        <div className="navbar-item-logo">To Do</div>
      </div>
      <div className="navbar-item">
        <div className="navbar-item-search">
          <SearchForm />
        </div>
      </div>
      <div className="navbar-item">
        {icons.map((icon) => (
          <div className="navbar-item-icons" key={icon.key}>
            <span className="material-icons">{icon.val}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
