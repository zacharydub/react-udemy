//alternative to data transformation logic inside component - using action creator/thunk
//since it's not a reducer, we can run async code
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://redux-advanced-94597-default-rtdb.firebaseio.com/cart.json"
      );

      if (!res.ok) {
        throw new Error("couldnt fetch cart");
      }
      const data = await res.json();

      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "sending cart data",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-advanced-94597-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }), //not including the new cart.changed prop as part of the DB on firebase - dont need that as part of DB
        }
      );

      if (!res.ok) {
        throw new Error("issue");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "sent data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "sending cart data failed",
        })
      );
    }
  };
};
