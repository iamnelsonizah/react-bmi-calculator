import React, {useState} from "react";
import './index.css';


function App() {

  //state
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');


  let calcBmi = (event) => {

    event.preventDefault();
    
    if(weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height) * 10000)
      setBmi(bmi.toFixed(1))

      // Logic for message

      if(bmi < 18.4) {
        setMessage('You are underweight')
      } else if(bmi >= 18.5 && bmi <= 24.9) {
        setMessage('You have a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  // show image based on bmi calculation
  let imgSrc;

  if(bmi < 1) 
  {
    imgSrc = null
  } else 
  {
    if (bmi < 18.4) {
      imgSrc = require('../src/assets/underweight.PNG')
    } else if (bmi >= 18.5 && bmi < 24.9) {
      imgSrc = require('../src/assets/healthy.PNG')
    } else {
      imgSrc = require('../src/assets/overweight.PNG')
    }
  }

  let reload = () => {
    window.location.reload()
  }



  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)}/>
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)}/>
          </div>
          <button className="btn" type="submit">Submit</button>
          <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default App;
