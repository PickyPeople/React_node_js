import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch( //밑의 url을 가져오겠다
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
    .then((res) => res.json()) //그리고 나서 json파일로 바꾸어 사용하겠다(필수)
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    }); //json파일을 가져온것중에 무엇을 보여줄지 console창을 열고 확인한다.
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}

export default App;
