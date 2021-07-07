import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const [btnHighlight, setBtnHighlight] = useState(false);

  const cartCtx = useContext(CartContext); //by using the CartContext, this component will be rerendered whenever the context changes

  const numberOfCartItems = cartCtx.items.reduce(
    (acc, init) => acc + init.amount,
    0
  );

  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : ""}`;

  const { items } = cartCtx;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    //bump animation only happens after first time class is added, so we want to remove the class then re-add it upon each item addition
    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    //cart button component will always be there but good practice to clean up any timers or side effects. Also this way we reset the timer in case items are added in rapid pace
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    //<button className={classes.button} onClick={props.onCustomClick}>
    <button className={btnClasses} onClick={props.onCustomClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
