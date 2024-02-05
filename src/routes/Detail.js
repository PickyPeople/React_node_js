import React, { useEffect, useState }  from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";


function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const {id} = useParams();
  const getMovie = async () =>{
    // https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
    const json = await(
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}&minimum_rating=9&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json);
    console.log(movies.id)
    console.log(id);
  }
  useEffect(() => {
    getMovie();
  },[])
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        null
      )}
    </div>
  )
}

export default Detail;