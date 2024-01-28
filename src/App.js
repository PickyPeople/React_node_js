import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1 );
    // console.log(keyword); //버튼을 클릭 했을 때 keyword를 뽑아내는방식
  }
  const onChange = (e) => {
    setKeyword(e.target.value); //검색창의 값을 알아내주는 함수이다
  };
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    if(keyword!== "" && keyword.length > 5){
      console.log("i run when 'keyword more than 5 words' changes");
    } 
  }, [keyword]);
  useEffect(() => {
      console.log("i run when 'counter' changes");
  }, [counter])
  useEffect(() => {
    console.log("i run when 'counter && keyword' changes");
}, [counter, keyword])
  
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here"></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
