import React, { forwardRef, useEffect } from "react";

const Banner = forwardRef(({ label, title, children, ...props }, ref) => {
  useEffect(() => {}, []);

  return <div {...props}>{children}</div>;
});

export default Banner;
