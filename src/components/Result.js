import React, { useState } from 'react';
import styles from './styles.module.css'
import { useEffect } from 'react';
import DietList from './DietLists';

function Result(props) {
  const [bmiValue, setBmiValue] = useState(0);

  const [bmiInfo, setBmiInfo] = useState('Unknown');

  const [dietListInfo, setDietListInfo] = useState('');

  useEffect(() => {
    setBmiValue(props.bmi);

    const bmiMessage = () => {
      if(bmiValue < 18.5){
        setBmiInfo('You are below ideal weight.');
        setDietListInfo("belowIdeal");
      }
      else if(bmiValue >= 18.5 || bmiValue < 25){
        setBmiInfo('You are at ideal weight.');
        setDietListInfo("ideal");
      }
      else if(bmiValue >= 25 || bmiValue < 30){
        setBmiInfo('You are above ideal weight.');
        setDietListInfo("aboveIdeal");
      }
      else if(bmiValue >= 30 || bmiValue < 40){
        setBmiInfo('You are way above the ideal weight (obese).');
        setDietListInfo("obese");
      }
      else if(bmiValue >= 40){
        setBmiInfo('You are well above the ideal weight (morbidly obese).');
        setDietListInfo("morbidObese");
      }

      // console.log(DietList.ideal.breakfast);
    }

    bmiMessage();
  }, [props.bmi, bmiValue]);

  return (
    <div className={styles.container}>
        <h1>Your BMI is {<span style={{color: "dodgerblue"}}>{bmiValue}</span>}</h1>
        <h2>BMI info: {bmiInfo}</h2>

        <div className='dietList'>
          <h4>Here's an ideal diet list for you to get healtier:</h4>
          <ul>
            <li>Breakfast: {DietList.ideal.breakfast}</li>
            {/* <li>Lunch: {DietList[dietListInfo].lunch}</li>
            <li>Dinner {DietList[dietListInfo].dinner}</li> */}
          </ul>
        </div>
    </div>
  );
}

export default Result;