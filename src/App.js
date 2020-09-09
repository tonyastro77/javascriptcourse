import React, {useState} from 'react';
import './App.css';
import CostSpan from './CostSpan';
import Cost from './Cost';
import Bill from './Bill';

import './App.css';

function App() {

  const[money, setMoney] = useState(2000);
  const[result, setResult]= useState("");
  //Creating a variable
  var b = "Hello welcome to this app";
  var rent = 600;
  var type = "studing housing"

  //creating function
  const show = (x, y) => {
    return `You have to pay for ${x} and it costs ${y} euros.`;
  }

  //using this arrow function to change value of remaining money
  const payDebts = () => { 
    
    //While the result is not less than 0
      if(money-rent >0 ){
        setMoney(money - rent);
        setResult(`You have paid your rent and you have now ${money} euros.`)
      }

      //if the results is less than 0 then the result should be 0 and not less
      else{
        setMoney(0);
        setResult(`You have paid your rent and you have now ${money} euros.`)
      }
  
  }

  let cost = {a : type, b: rent }
  return (
    <div className="App">
      <div className="App-header">
        <h3>Billing App</h3>
      </div>
      <div className="AppBody">
        <p>{b}</p>
        <p>{show(cost.a, cost.b)}</p>
        <button onClick={() => payDebts()}>Pay</button>
         <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
