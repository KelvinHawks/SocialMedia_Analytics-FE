import React, { useState } from "react";
import "./Business.css";
const Filter = ({ recommendedHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFilter = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="filter">
      <button onClick={toggleFilter} className="Electronic-filter_btn">
        Furniture
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
            <option value="table" onClick={recommendedHandler}>
              Tables
            </option>
            <option value="chair" onClick={recommendedHandler}>
              Chairs
            </option>
          </select>

          <select>
            <option value="plastic" onClick={recommendedHandler}>
              Plastics
            </option>
            <option value="metal" onClick={recommendedHandler}>
              Metal
            </option>
          </select>

          {/* Add more filter elements as needed */}
        </div>
      )}
    </div>
  );
};

export default Filter;
