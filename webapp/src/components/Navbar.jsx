import React, { forwardRef } from "react";

const Navbar = forwardRef(({ children, ...props }, ref) => {
  return (
    <div id="navbar" ref={ref} className="navbar" {...props}>
      {children}
    </div>
  );
});

export default Navbar;
