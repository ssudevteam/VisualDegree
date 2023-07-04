import React, { forwardRef } from "react";
import "../../css/sidebar.css";

const Sidebar = forwardRef(({ children, ...props }, ref) => {
  return (
    <div id="sidebar" className="sidebar sidebar-card" ref={ref} {...props}>
      {children}
    </div>
  );
});

export default Sidebar;
