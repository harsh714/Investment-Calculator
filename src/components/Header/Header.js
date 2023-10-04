import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
