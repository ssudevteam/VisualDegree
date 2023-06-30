import React from "react";
import "../../css/sidebar.css";

class Sidebar extends React.Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <div
        id="sidebar"
        className="sidebar sidebar-card"
        style={{
          backgroundColor: "whitesmoke",
        }}
        {...props}>
        {children}
      </div>
    );
  }
}

export default Sidebar;
