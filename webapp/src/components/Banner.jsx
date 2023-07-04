import React, { forwardRef } from "react";

const Banner = forwardRef(({ children, ...props }, ref) => {
  return (
    <div ref={ref} className="banner" {...props}>
      {children}
    </div>
  );
});

export default Banner;
