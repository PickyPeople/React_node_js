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
    // setTodo(""); //검색을 누르고 난 다음 검색창을 지우기 위한 것
    setTodos((curretArray) => [toDo, ...curretArray]); //toDos의 배열에 새로운 배열인수를 넣어주기 위한 식
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="write your to do" 
        />
        <button>Add TO Do</button>
      </form>
      
    </div>
  );
}

export default App;
