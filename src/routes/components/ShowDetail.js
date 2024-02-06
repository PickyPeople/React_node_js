import PropTypes from "prop-types";
import React from "react";


function ShowDetail ({coverImg, title, summary, genres}) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) =>(
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )  
}

export default ShowDetail;