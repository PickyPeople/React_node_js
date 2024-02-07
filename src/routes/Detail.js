import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import ShowDetail from "./components/ShowDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}&minimum_rating=9&sort_by=year`)
    ).json();
    console.log(json.data.movies);
    setMovies(json.data.movies);
    setLoading(false);

  }
  useEffect(() => {
    getMovie();
  }, [])

  const judege = movies.find(movie => movie.id === Number(id));
  console.log(judege)

  // return (
  //   <div>
  //     <img src={judege.medium_cover_image}></img>
  //     <h2>{judege.title}</h2>
  //     <p>{judege.summary}</p>
  //     <ul>
  //       {judege.genres.map((g) => (
  //         <li key={g}>{g}</li>
  //       ))}
  //     </ul>
  //   </div>
  // ) 원래는 함수를 만들어서 만들었었음

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <ShowDetail
             id={id}
             coverImg={judege.medium_cover_image} 
             title={judege.title} 
             summary={judege.summary} 
             genres={judege.genres}
          />
        </div>
      )}
    </div>
  )
}

export default Detail;