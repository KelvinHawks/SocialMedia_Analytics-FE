import React, { useState } from "react";
import "./Fashion.css";
const Filter = ({ recommendedHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFilter = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="filter">
      <button onClick={toggleFilter} className="Electronic-filter_btn">
        Fashion
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
            <option value="women" onClick={recommendedHandler}>
              Women Clothing
            </option>
            <option value="men" onClick={recommendedHandler}>
              Men Clothing
            </option>
          </select>

          <select>
            <option value="makeup" onClick={recommendedHandler}>
              MakeUps
            </option>
            <option value="hair" onClick={recommendedHandler}>
              HairCare
            </option>
          </select>

          {/* Add more filter elements as needed */}
        </div>
      )}
    </div>
  );
};

export default Filter;
