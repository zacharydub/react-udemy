import React from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        {/*<button>Cart</button>*/}
        <HeaderCartButton onCustomClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        {/*<img src="../../assets/meals.jpg" />*/}
        <img src={mealsImg} alt="tableOfFood" />
      </div>
    </>
  );
}
