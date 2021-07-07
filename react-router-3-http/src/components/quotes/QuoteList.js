//using query params with react-router

import { Fragment } from "react";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom"; //using useHistory to add query params to URL. using useLocation to get access to location object which has info about currently loaded URL

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAsc = queryParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);

  const changeSortingHandler = () => {
    //history.push("/quotes?sort=asc"); //causes this component to rerender
    //history.push("/quotes?sort=" + (isSortingAsc ? "desc" : "asc"));
    history.push(`${location.pathname}?sort=${isSortingAsc ? "desc" : "asc"}`);
    //or, or readability, when working with complex URLs:
    //history.push({
    //  pathname:location.pathname,
    //  search:`?sort=${(isSortingAsc ? "desc" : "asc")}`
    //})
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
