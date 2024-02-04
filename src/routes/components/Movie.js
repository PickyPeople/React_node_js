import PropTypes from "prop-types"
import React from "react";

function Movie({coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => ( //여기서의 g는 장르가 배열로 들어가 있기 때문에 각각의 요소를 움직여 주기 위하여 쓰인다.
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}


export default Movie;