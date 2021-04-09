import "./styles.css";
import Task1 from "./Task1/task1";
import Task2 from "./Task2/task2";

export default function App() {
  return (
    <div className="App">
      <h1>Task1</h1>
      <Task1 />
      <hr />
      <h1>Task2</h1>
      <Task2 />
      <hr />
    </div>
  );
}
