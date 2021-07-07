import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  console.log(params.productId); //productId is the parameterized route we used in App.js
  return (
    <section>
      <h1>ProductDetail</h1>
      <p>{params.productId}</p>
    </section>
  );
}
