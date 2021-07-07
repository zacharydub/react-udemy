import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">book</Link>
        </li>
        <li>
          <Link to="/products/p2">carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">course</Link>
        </li>
      </ul>
    </section>
  );
}
