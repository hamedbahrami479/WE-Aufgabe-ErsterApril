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
    event.target.value = "";
  }

  function removeToDo(toDoIndex) {
    const deleteToDo = toDos.filter((toDo, index) => index !== toDoIndex);
    setToDos(deleteToDo);
  }

  function toggleStatus(toDoIndex) {
    const newToDoStatus = [...toDos];
    newToDoStatus[toDoIndex].status = !newToDoStatus[toDoIndex].status;
    setToDos(newToDoStatus);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input onChange={handleOnChange} value={input} placeholder="Test"></input>
      <button onClick={(event) => addToDo(event)}>Add To-do</button>
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
