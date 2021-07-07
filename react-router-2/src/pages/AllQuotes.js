import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "max",
    text: "fun times",
  },
  {
    id: "q2",
    author: "zach",
    text: "fcools",
  },
];

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}
