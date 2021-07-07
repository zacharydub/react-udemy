//using thunk / action creator

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//import { uiActions } from "./store/ui-slice";

import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";

let isInitial = true;
function App() {
  const show = useSelector((state) => state.ui.showCart);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    //const sendCartData = async () => {
    //dispatch(
    //  uiActions.showNotification({
    //    status: "pending",
    //    title: "Sending...",
    //    message: "sending cart data",
    //  })
    //);
    //const res = await fetch(
    //  "https://redux-advanced-94597-default-rtdb.firebaseio.com/cart.json",
    //  {
    //    method: "PUT",
    //    body: JSON.stringify(cart),
    //  }
    //);
    //if (!res.ok) {
    //  throw new Error("issue");
    //}
    //const resData = await res.json();

    //dispatch(
    //  uiActions.showNotification({
    //    status: "success",
    //    title: "Success",
    //    message: "sent data successfully",
    //  })
    //);
    //};
    //if (isInitial) {
    //  isInitial = false;
    //  return; //this way we dont send the cart data on the first rendering, which would overwrite the existing cart whic hwe dont want
    //}
    //sendCartData().catch((error) => {
    //dispatch(
    //  uiActions.showNotification({
    //    status: "error",
    //    title: "Error",
    //    message: "sending cart data failed",
    //  })
    //);
    //});
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      //this way only if we add something to cart do we send data again
      dispatch(sendCartData(cart)); //here we are dispatching an action creator that returns a func, which redux toolkit can handle. This way we moved logic from component to action creator func - all the hard work happens inside our custom actio ncreatro func inside redux file
    }
  }, [cart, dispatch]); //dispatch func wont ever change but we add it here since it's technically a dependency

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
