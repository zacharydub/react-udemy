import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom"; //implement programmatic navigation

export default function NewQuote() {
  const history = useHistory();
  //can then use either push (adds new page, allows user to go back) or replace (i.e redirect) method

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
  };

  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
}
