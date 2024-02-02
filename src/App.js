import { useEffect, useState} from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (e) => { //input의 입력값을 나타내기 위해서 반드시 필요한 것이다.
    setTodo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault(); //버튼을 누르고 새로고침이 되는 것을 막기 위하여
    if(toDo === ""){
      return; 
    }
    setTodos((curretArray) => [toDo, ...curretArray]); //toDos의 배열에 새로운 배열인수를 넣어주기 위한 식 
                                                       //currentArray는 인수가 아닌 함수이름이다. 함수의 기능이 => 의 뒤에 나와있는 형태
    setTodo(""); //검색을 누르고 난 다음 검색창을 지우기 위한 것
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} //setTOdo에 새로 갱신되는 값을 toDo로 보내준다.
          value={toDo}
          type="text" 
          placeholder="write your to do" 
        />
        <button>Add TO Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>) } 
        {/* {map이라는 함수는 각 argument마다 실행을 시켜주는 함수이다.} */}
      </ul>
    </div>
  );
}

export default App;
