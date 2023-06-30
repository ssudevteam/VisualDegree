import React, { useState } from "react";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select">Select Language:</label>
      <select
        id="language-select"
        value={selectedLanguage}
        onChange={handleLanguageChange}>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
};

export default LanguageSelector;
