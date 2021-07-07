import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <main>
        <div>
          <Switch>
            {/* switch component tells react router to only use one active route at a time (the first one that matches - the start, not the whole path), and not all routes that have same starting route i.e products and products/1, which would then render product/1 details below the products page on same page. But then when we click on a link we dont navigate to that page, bc react matches the first route. So we can either change the order of the components and have all the detail products appear before the Products component, or we can add 'exact' prop - which tells recat to match full path (not just starting path)*/}
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/" exact>
              <Redirect to="/welcome" />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/products/:productId">
              {/* dynamic path*/}
              <ProductDetail />
            </Route>
          </Switch>
        </div>
      </main>
    </>
  );
}

export default App;
