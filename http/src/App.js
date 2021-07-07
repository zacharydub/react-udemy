//using firebase to send POST requests
import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      //const res = await fetch("https://swapi.dev/api/films/");
      const res = await fetch(
        "https://max-udemy-http-39848-default-rtdb.firebaseio.com/movies.json"
        //the url came from firebase. We add 'movies.json' at the end to create a new node on the firebase DB. Movies is our made-up name, and firebase requires 'json' at the end of URL we send requests to, otherwise requests will fail
      );

      if (!res.ok) {
        throw new Error("something went wrong");
      }

      const data = await res.json();
      console.log(data);

      //const newList = data.results.map((movieData) => {
      //  return {
      //    id: movieData.episode_id,
      //    title: movieData.title,
      //    openingText: movieData.opening_crawl,
      //    releaseDate: movieData.release_date,
      //  };
      //});
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }

      //setMovies(newList);
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    //console.log(movie);
    const res = await fetch(
      "https://max-udemy-http-39848-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
