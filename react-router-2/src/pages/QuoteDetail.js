import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

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

export default function QuoteDetail() {
  const match = useRouteMatch();
  const param = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <div>
      {/*<h1>quote detail</h1>
      <p>{param.quoteId}</p>*/}
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* nested Route + Link so that if we dont see comments Link if we're already on /comments, only on details page AKA /quotes/:id. Then when we click on comments link to take us to comments page/show us comments, the comments link will disappearThis is how we conditionally render content based on URL without having to manage state */}

      {/*<Route path={`/quotes/${param.quoteId}`} exact>*/}
      <Route path={match.path} exact>
        <div className="centered">
          {/*<Link className="btn--flat" to={`/quotes/${param.quoteId}/comments`}>*/}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Comments
          </Link>
        </div>
      </Route>

      {/*<Route path="/quotes/:quoteId/comments">*/}
      {/*<Route path={`/quotes/${param.quoteId}/comments`}>*/}
      {/* the drawback to writing out all these routes is that if we change a path then we need to change all the places we wrote ou that path. So we use useRouteMatch hook then use the path prop instead of writing out the entire url - this way, if we change the root route definitions on App.js, we don't need to adjust here */}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
}
