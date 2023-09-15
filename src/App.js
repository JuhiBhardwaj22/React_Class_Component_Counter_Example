import logo from "./logo.svg";
import "./App.css";
import Counter from "./component/CounterWithoutRedux";
import ClassExample from "./component/ClassExample";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <ClassExample />
      </header>
    </div>
  );
}

export default App;
