import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
//
//const DUMMY_QUOTES = [
//  {
//    id: "q1",
//    author: "max",
//    text: "fun times",
//  },
//  {
//    id: "q2",
//    author: "zach",
//    text: "fcools",
//  },
//];

export default function QuoteDetail() {
  const match = useRouteMatch();
  const param = useParams();
  //const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);
  //new:
  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );
  const { quoteId } = param;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    <div className="centered">
      <LoadingSpinner />
    </div>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  //console.log(loadedQuote);

  if (!loadedQuote) {
    return <p>No quote found</p>;
  }

  //if (!quote) {
  //  return <p>No quote found</p>;
  //}

  return (
    <div>
      {/*<HighlightedQuote text={quote.text} author={quote.author} />*/}
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}
