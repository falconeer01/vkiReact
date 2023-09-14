import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import MyButtons from './MyButtons';

function Calculate({ updateUserValues }) {
  const [bmi, setBmi] = useState(0);
  const [userWeight, setUserWeight] = useState(0);
  const [userHeight, setUserHeight] = useState(0);

  const navigation = useNavigate();

  useEffect(() => {
    localStorage.setItem('bmi', bmi);
  }, [bmi]);

  const setValues = (e) => {
    const { name, value } = e.target;

    if (name === 'wInput') {
      setUserWeight(value);
    } else if (name === 'hInput') {
      setUserHeight(value);
    }
  }

  const bmiCalc = (e) => {
    e.preventDefault();

    const heightInMeters = userHeight / 100;
    const calculatedBMI = (userWeight / (heightInMeters * heightInMeters)).toFixed(1);

    setBmi(calculatedBMI);

    console.log(userWeight, userHeight);
    console.log("çalıştı");

    updateUserValues(userWeight, userHeight);

    navigation(`/result/w=${userWeight};h=${userHeight}`);
  }

  return (
    <div className={styles.container}>
      <form className={styles.bmiForm} onSubmit={(e) => bmiCalc(e)}>
        <div className={styles.inputGroup}>
            <label htmlFor="wInput">Weight:</label>
            <input type='number' name='wInput' id='wInput' onChange={(e) => setValues(e)}/>
        </div>

        <br /><br />

        <div className={styles.inputGroup}>
            <label htmlFor="hInput">Height (cm):</label>
            <input type='number' name='hInput' id='hInput' onChange={(e) => setValues(e)}/>
        </div>

        <br /><br />

        {/* <button type="submit" className="btn btn-dark mb-3">
          Calculate BMI
        </button> */}

        <MyButtons type={'btnDodger'} text={'Calculate BMI'} />

      </form>
    </div>
  );
}

export default Calculate;