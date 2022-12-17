
import { useState } from "react";
import counter from "./component/counter"

import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const AddClicedk = () => {
    setCounter(counter + 1)
  }
  const Subclicked = () => {
    setCounter(counter - 1)
  }
const ResetClicked = () =>{
  setCounter(0)
}
  return (
    <div className="App">
      <h1>Counter </h1>
     <h1> {counter}</h1>
      <div className="counter">
   
        <button onClick={AddClicedk}>+</button>
        <button onClick={ResetClicked} className="reset">Reset</button>
        <button onClick={Subclicked}>-</button>
      </div>
      

    </div>
  );
}

export default App;
