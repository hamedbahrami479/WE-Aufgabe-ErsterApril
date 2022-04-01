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

  function addToDo() {
    const addNewToDo = [...toDos, { text: input, status: true }];
    setToDos(addNewToDo);
  }

  function removeToDo(toDoIndex) {
    const deleteToDo = toDos.filter((toDo, index) => index !== toDoIndex);
    setToDos(deleteToDo);
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input onChange={handleOnChange} placeholder="Test"></input>
      <button onClick={addToDo}>Add To-do</button>
      <ul>
        {toDos.map((toDo, index) => (
          <li key={index}>
            <p>
              {toDo.text}
              <button onClick={() => removeToDo(index)}>X</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
