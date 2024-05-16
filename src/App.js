import logo from "./logo.svg";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoCounter />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      {/* <CreateTodoButton/> */}
    </div>
  );
}


export default App;
