import React, { useState } from "react";
import "./Homes.css";
const Filter = ({ recommendedHandler }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFilter = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className="filter">
      <button onClick={toggleFilter} className="Electronic-filter_btn">
        Homes and Gardens
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
            <option value="bedroom" onClick={recommendedHandler}>
              Bedrooms
            </option>
            <option value="kitchen" onClick={recommendedHandler}>
              Kitchen
            </option>
          </select>

          <select>
            <option value="garden" onClick={recommendedHandler}>
              garden tools
            </option>
            <option value="machinery" onClick={recommendedHandler}>
              machineries
            </option>
          </select>

          {/* Add more filter elements as needed */}
        </div>
      )}
    </div>
  );
};

export default Filter;
