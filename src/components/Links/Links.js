import React from "react";
import { Link } from "react-router-dom";
import styles from "./Links.module.css";

function Links(props) {
  return (
    <Link to={props.to} className={`${styles.links}`}>
      {props.children}
    </Link>
  );
}

export default Links;
