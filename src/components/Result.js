import React, { useState } from 'react';
import styles from './styles.module.css'
import { useEffect } from 'react';

function Result(props) {
  const [bmiValue, setBmiValue] = useState(0);

  const [bmiInfo, setBmiInfo] = useState('Unknown');

  useEffect(() => {
    setBmiValue(props.bmi);

    const bmiMessage = () => {
      if(bmiValue < 18.5){
        setBmiInfo('You are below ideal weight.');
      }
      else if(bmiValue >= 18.5 || bmiValue < 25){
        setBmiInfo('You are at ideal weight.');
      }
      else if(bmiValue >= 25 || bmiValue < 30){
        setBmiInfo('You are above ideal weight.');
      }
      else if(bmiValue >= 30 || bmiValue < 40){
        setBmiInfo('You are way above the ideal weight (obese).');
      }
      else if(bmiValue >= 40){
        setBmiInfo('You are well above the ideal weight (morbidly obese).');
      }
    }

    bmiMessage();
  }, [props.bmi, bmiValue]);

  return (
    <div className={styles.container}>
        <h1>Your BMI is {<span style={{color: "dodgerblue"}}>{bmiValue}</span>}</h1>
        <h2>BMI info: {bmiInfo}</h2>
    </div>
  );
}

export default Result;