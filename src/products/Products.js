import React, { useState } from "react";
import "./Products.css";
import Button from "../shared/components/formElements/Button";
//import Card from "../shared/UIelements/Card";
function Products({ result, isLoading }) {
  // const [firstOption, setFirstOption] = useState("Useless First");
  const firstOptions = ["Useless First", "Option 2", "Option 3", "Option 4"];
  // const [secondOption, setSecondOption] = useState("Conditions");
  const secondOptions = ["Conditions", "Option 2", "Option 3", "Option 4"];
  // const [thirdOption, setThirdOption] = useState("Deliverly options");
  const thirdOptions = [
    "Deliverly options",
    "Option 2",
    "Option 3",
    "Option 4",
  ];
  const [options, setOptions] = useState([]);

  const handleSelectedOptions = (e) => {
    const target = e.target.value;
    setOptions(target);
  };

  return (
    <div className="products_container">
      <div className="products-nav_container">
        <div className="div_left">
          <select value={options.firstOption} onChange={handleSelectedOptions}>
            {firstOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select value={options.secondOption} onChange={handleSelectedOptions}>
            {secondOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select value={options.thirdOption} onChange={handleSelectedOptions}>
            {thirdOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="div_right">
          <Button>Show All</Button>
          <Button>Auction</Button>
          <Button>Deliverly Options</Button>
          <Button>
            <i className="fa-solid fa-list"></i>
          </Button>
          <Button>
            <i className="fa-brands fa-windows"></i>
          </Button>
        </div>
      </div>
      <div className="card_div">
        {isLoading && (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
        {result}
        {/* {data.map((item) => {
          return (
            <Card
              key={Math.random()}
              image={item.image}
              description={item.description}
              small={item.small}
              price={item.price}
              rating={item.rating}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default Products;
