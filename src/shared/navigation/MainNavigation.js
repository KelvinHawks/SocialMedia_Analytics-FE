import React from "react";
import MainHeader from "./MainHeader";
import Input from "../components/formElements/Input";
import Button from "../../shared/components/formElements/Button";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import Avatar from "../UIelements/Avatar";
function MainNavigation({ handleInputChange }) {
  const clearSearchHandler = () => {
    console.log("cleared");
  };
  return (
    <MainHeader>
      <div className="flex_left"></div>
      <div className="form-control">
        <div className="search-container">
          <Input
            element="input"
            type="text"
            placeholder="Search..."
            onChange={handleInputChange}
          />
          <button className="search_btn" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className="onClear" onClick={clearSearchHandler}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <p className="prefered_search">Consumer Electronics</p>
      </div>
      <div className="flex_right">
        <div className="btn_div">
          <Link to="/">
            <Button>Home</Button>
          </Link>

          <div className="cart_btn">
            <Link to="/signup">
              <Button>Sign In</Button>
            </Link>
            {/* <div className="cart_quantity">
              <h4>5</h4>
            </div>*/}
          </div>
        </div>
        <div className="user-item__image">
          <Avatar image="../../images/lion (2).jpg" />
        </div>
      </div>
    </MainHeader>
  );
}

export default MainNavigation;
