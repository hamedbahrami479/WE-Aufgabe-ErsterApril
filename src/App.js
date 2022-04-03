import { useState } from "react";

import "./App.css";
export default App;

function App() {
  const [toDos, setToDos] = useState([]);

  const [input, setInput] = useState("");


  function handleOnChange(event) {
    const input = event.target.value;
    setInput(input);
  }

  function addToDo(event) {
    const addNewToDo = [...toDos, { text: input, status: false }];
    setToDos(addNewToDo);
    setInput("")
  }

  function removeToDo(toDoIndex) {
    const deleteToDo = toDos.filter((_toDo, index) => index !== toDoIndex);
    setToDos(deleteToDo);
  }

  function toggleStatus(toDoIndex) {
    const newToDoStatus = [...toDos];
    newToDoStatus[toDoIndex].status = !newToDoStatus[toDoIndex].status;
    setToDos(newToDoStatus);
  }




function filterToDos (toDoIndex){
   toDos.filteer((todo, index) => {})
}









  return (
    <div className="App">
      <h1>Hello World</h1>
      <input onChange={handleOnChange} value={input} placeholder="new ToDo"></input>
      <button onClick={addToDo}>Add To-do</button>
      <form class="form" action="">
      <select id="header__filter">
        <option value="All">All</option>
        <option status= {false} >Pending</option>
        <option status={true}>Done</option>
      </select>
      </form>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>
            <p>
              <button onClick={() => toggleStatus(index)}>
                {toDo.status ? "Done" : "Pending"}
              </button>
              {toDo.text}
              <button onClick={() => removeToDo(index)}>X</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
