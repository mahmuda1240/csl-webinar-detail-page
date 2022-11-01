import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <button className={`${styles.button} ${props.className} ` }>
      <Link to={props.to}>{props.children}</Link>
    </button>
  );
}

export default Button;
