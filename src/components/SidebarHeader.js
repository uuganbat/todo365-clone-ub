import React from "react";

export default function SidebarHeader(props) {
  return (
    <div className="sidebar-header">
      {props.isExpand ? (
        <div
          className="sidebar-button"
          onClick={(e) => {
            props.setIsExpand(false);
          }}
        >
          <span className="material-icons">chevron_left</span>
        </div>
      ) : (
        <div
          className="sidebar-button"
          onClick={(e) => {
            props.setIsExpand(true);
          }}
        >
          <span className="material-icons">chevron_right</span>
        </div>
      )}
    </div>
  );
}
