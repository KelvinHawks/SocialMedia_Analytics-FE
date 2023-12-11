import React from "react";
import "./Input.css";
function Input(props) {
  const element =
    props.element === "input" ? (
      <input
        className={`${props.className}`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    ) : (
      <input type="radio" id={props.id} onChange={props.onChange} />
    );
  return <div className="form-control">{element}</div>;
}

export default Input;
