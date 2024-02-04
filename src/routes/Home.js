import React from 'react';
import { useState, useEffect } from "react";
import Movie from "./components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch( //밑의 url을 가져오겠다
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? ( //조건이 참인 괄호
        <h1>Loading...</h1>
        ) : ( //조건이 거짓인 괄호 start
          <div>
            {movies.map((movie) => (
              <Movie 
                key={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres}
              />
            ))}
          </div>
          )} 
    </div>
  );
}

export default Home;