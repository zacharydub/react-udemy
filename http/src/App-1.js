import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  //const dummyMovies = [
  //  {
  //    id: 1,
  //    title: 'Some Dummy Movie',
  //    openingText: 'This is the opening text of the movie',
  //    releaseDate: '2021-05-18',
  //  },
  //  {
  //    id: 2,
  //    title: 'Some Dummy Movie 2',
  //    openingText: 'This is the second opening text of the movie',
  //    releaseDate: '2021-05-19',
  //  },
  //];
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //function fetchMoviesHandler() {
  //  fetch("https://swapi.dev/api/films/")
  //    .then((res) => res.json())
  //    .then((data) => {
  //      const newList = data.results.map((movieData) => {
  //        return {
  //          id: movieData.episode_id,
  //          title: movieData.title,
  //          openingText: movieData.opening_crawl,
  //          releaseDate: movieData.release_date,
  //        };
  //      });
  //      setMovies(newList);
  //    });
  //}
  ////from promises to async/await
  //  async function fetchMoviesHandler() {
  //    setIsLoading(true);
  //    setError(null);
  //    try {
  //      const res = await fetch("https://swapi.dev/api/films/");
  //
  //      if (!res.ok) {
  //        throw new Error("something went wrong");
  //      }
  //
  //      const data = await res.json();
  //
  //      const newList = data.results.map((movieData) => {
  //        return {
  //          id: movieData.episode_id,
  //          title: movieData.title,
  //          openingText: movieData.opening_crawl,
  //          releaseDate: movieData.release_date,
  //        };
  //      });
  //      setMovies(newList);
  //    } catch (error) {
  //      setError(error.message);
  //    }
  //    setIsLoading(false);
  //  }
  ////using useEffect + useCallback (to avoid infinite loop)
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("https://swapi.dev/api/films/");

      if (!res.ok) {
        throw new Error("something went wrong");
      }

      const data = await res.json();

      const newList = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(newList);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    console.log(movie);
  }

  let content;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Pending results...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {/*{!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies yet</p>}
        {isLoading && <p>Pending results...</p>}
        {!isLoading && error && <p>{error}</p>}*/}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
