import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
function Button(props) {
  if (props.href) {
    return <a href={props.href}>{props.children}</a>;
  }
  if (props.to) {
    return <Link to={props.to}>{props.children}</Link>;
  }
  return (
    <div className={`button ${props.className}`}>
      <button>{props.children}</button>
    </div>
  );
}

export default Button;
