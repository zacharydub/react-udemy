import React from "react";
import { Route } from "react-router-dom";

export default function Welcome() {
  return (
    <section>
      <h1>Welcome page</h1>
      <Route path="/welcome/new-user">
        {/* this route has to start with /welcome, bc this compnent only renders when we go to /welcome. So if we wrote/products/new-user then tht route would never run */}
        <p>welcome new user</p>
      </Route>
    </section>
  );
}
