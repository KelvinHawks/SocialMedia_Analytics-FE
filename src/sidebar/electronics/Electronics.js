import React, { useState } from "react";
import "./Electronics.css";
const Filter = ({ recommendedHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFilter = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="filter">
      <button onClick={toggleFilter} className="Electronic-filter_btn">
        Appliances
        <span className="arrow">
          {isExpanded ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-right"></i>
          )}
        </span>
      </button>
      {isExpanded && (
        <div className="filter-options">
          {/* Your filter options/content here */}

          <select>
            <option value="phone" onClick={recommendedHandler}>
              Cell Phones and SmartPhones
            </option>
            <option value="electronic" onClick={recommendedHandler}>
              electronics
            </option>
          </select>

          <select>
            <option value="computer" onClick={recommendedHandler}>
              Computers
            </option>
            <option value="laptop" onClick={recommendedHandler}>
              Laptops
            </option>
          </select>

          {/* Add more filter elements as needed */}
        </div>
      )}
    </div>
  );
};

export default Filter;
