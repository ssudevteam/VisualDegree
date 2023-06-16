import React, { useState, useEffect } from "react";

const FontSelector = () => {
  const [selectedFont, setSelectedFont] = useState("");

  // Load the previously selected font from localStorage on initial render
  useEffect(() => {
    const savedFont = localStorage.getItem("selectedFont");
    if (savedFont) {
      setSelectedFont(savedFont);
    }
  }, []);

  // Handle font selection from the dropdown
  const handleFontSelect = (event) => {
    const font = event.target.value;
    setSelectedFont(font);
    localStorage.setItem("selectedFont", font);
  };

  // Apply the selected font to elements with the 'react-flow-node' class
  useEffect(() => {
    const flowNodes = document.getElementsByClassName("react-flow__node");
    for (let i = 0; i < flowNodes.length; i++) {
      flowNodes[i].style.fontFamily = selectedFont;
    }
  }, [selectedFont]);

  return (
    <div>
      <label htmlFor="font-select">Select Font:</label>
      <select id="font-select" value={selectedFont} onChange={handleFontSelect}>
        <option value="">Default</option>
        <option value="Delius">Delius</option>
        <option value="Alegreya">Alegreya</option>
        <option value="Roboto">Roboto</option>
        <option value="Open Sans">Open Sans</option>
        <option value="Montserrat">Montserrat</option>
      </select>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Delius&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
        `}
      </style>
    </div>
  );
};

export default FontSelector;
