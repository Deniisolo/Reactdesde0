import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOLI <code>src/App.js</code> AMORCHITO
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function TodoList() {
  return (
    <li>
      <span>V</span>
      <p>Llorar por la Lorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
