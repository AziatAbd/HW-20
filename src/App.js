import "./App.css";
import useCounter from "./hook/useCounter";


function App() {
  const {increment, decrement, resetCount , count} = useCounter()
  
  return <div className="App">
    <h1>{count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={resetCount}>reset</button>
  </div>;
}

export default App;
