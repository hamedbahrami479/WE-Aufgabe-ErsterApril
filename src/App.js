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
    console.log(event);
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
      <div className="Header">
        <h1>To-Do List App</h1>
        <input
          onChange={handleOnChange}
          value={input}
          placeholder="Set a new To-do"
        ></input>
        <button className="addButton" onClick={(event) => addToDo(event)}>
          Add
        </button>
      </div>
      <div>
        <ul>
          {toDos.map((toDo, index) => (
            <li className="toDoContainer" key={index}>
              <div>
                <button
                  className={`statusButton ${
                    toDo.status ? "" : "statusButton--done"
                  }`}
                  onClick={() => toggleStatus(index)}
                >
                  {toDo.status ? "Done" : "Pending"}
                </button>
              </div>
              <div>{toDo.text}</div>
              <div>
                <button
                  className="removeButton"
                  onClick={() => removeToDo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
