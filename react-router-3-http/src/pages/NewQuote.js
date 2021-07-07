import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";
//new:
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

export default function NewQuote() {
  const history = useHistory();
  //new:
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    //console.log(quoteData);
    sendRequest(quoteData);

    //history.push("/quotes");
  };

  return (
    <div>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addQuoteHandler}
      />
    </div>
  );
}
