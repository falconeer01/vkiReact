import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

function Calculate() {
  const [bmi, setBmi] = useState(0);
  const [userWeight, setUserWeight] = useState(0);
  const [userHeight, setUserHeight] = useState(0);

  useEffect(() => {
    localStorage.setItem('bmi', bmi);
  }, [bmi]);

  const bmiCalc = () => {
    const weight = document.querySelector('#wInput').value;
    const height = document.querySelector('#hInput').value;

    setUserWeight(weight);
    setUserHeight(height);

    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(calculatedBMI);

    console.log(userWeight);
    console.log(userHeight);
    console.log(calculatedBMI);
  }

  return (
    <div className={styles.container}>
      <form className={styles.bmiForm}>
        <div className={styles.inputGroup}>
            <label htmlFor="wInput">Weight:</label>
            <input type='number' name='wInput' id='wInput' />
        </div>

        <br /><br />

        <div className={styles.inputGroup}>
            <label htmlFor="hInput">Height (cm):</label>
            <input type='number' name='hInput' id='hInput' />
        </div>

        <br /><br />

      </form>

      <button type="button" className="btn btn-dark mb-3" onClick={() => bmiCalc()}>Calculate BMI</button>

      <h1 className='mb-3'>BMI: {bmi}</h1>

      <p>To learn more about your BMI result switch to result panel from the navbar above.</p>
    </div>
  );
}

export default Calculate;