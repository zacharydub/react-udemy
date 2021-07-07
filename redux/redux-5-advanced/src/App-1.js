import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import { uiActions } from "../../redux-4-toolkitPractice/src/store/ui-slice";
import Notification from "./components/UI/Notification";

let isInitial = true; //defined outside component so it never changes and not reinitialized when rerendering - only when this file is first read/when the apps starts

function App() {
  const show = useSelector((state) => state.ui.showCart);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  //send HTTP request whenver cart changes:
  //useEffect(() => {
  //  fetch(
  //    "https://redux-advanced-94597-default-rtdb.firebaseio.com/cart.json",
  //    {
  //      method: "PUT",
  //      body: JSON.stringify(cart),
  //    }
  //  );
  //}, [cart]);
  useEffect(() => {
    const sendCartData = async () => {
      dispatchEvent(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "sending cart data",
        })
      );
      const res = await fetch(
        "https://redux-advanced-94597-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!res.ok) {
        throw new Error("issue");
      }
      //const resData = await res.json();

      dispatchEvent(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "sent data successfully",
        })
      );
    };
    if (isInitial) {
      isInitial = false;
      return; //this way we dont send the cart data on the first rendering, which would overwrite the existing cart whic hwe dont want
    }
    sendCartData().catch((error) => {
      dispatchEvent(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "sending cart data failed",
        })
      );
    });
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
