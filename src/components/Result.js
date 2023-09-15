import React, { useState, useEffect } from 'react';
import styles from './styles.module.css'

function Result(props) {
  const arr = [
    {
        "state": "below ideal",
        "breakfast": "Oatmeal with fresh fruits",
        "lunch": "Grilled chicken breast with vegetables",
        "dinner": "Salmon with steamed broccoli"
    },

    {
        "state": "ideal",
        "breakfast": "Oatmeal with milk and nuts",
        "lunch": "Chicken salad",
        "dinner": "Whole wheat pasta with grilled vegetables"
    },

    {
        "state": "above ideal",
        "breakfast": "Yogurt with fresh fruit",
        "lunch": "Chicken sandwich with green salad",
        "dinner": "Grilled turkey breast with brown rice"
    },
        
    {
        "state": "obese",
        "breakfast": "Whole-grain toast with peanut butter and a banana",
        "lunch": "Tuna salad",
        "dinner": "Grilled salmon with brown bulgur"
    },

    {
        "state": "morbid obese",
        "breakfast": "Cottage cheese with sliced green apples",
        "lunch": "Vegetable quinoa pilaf",
        "dinner": "Baked chicken breast with grilled vegetables"
    }
];

  const [bmiValue, setBmiValue] = useState(0);

  const [bmiInfo, setBmiInfo] = useState('Unknown');

  const [dietListInfo, setDietListInfo] = useState([]);

  // useEffect(() => {
  //   import('./DL2.json')
  //   .then(data => {setDietListInfo(data)})
  //   .catch((e) => console.error(e))

    
  // }, [props.bmi]);

  useEffect(() => {
    const bmiMessage = () => {
      if (bmiValue < 18.5) {
        setBmiInfo('You are below ideal weight.');
        setDietListInfo("below ideal");
      }
      else if (bmiValue >= 18.5 && bmiValue < 25) {
        setBmiInfo('You are at ideal weight.');
        setDietListInfo("ideal");
      }
      else if (bmiValue >= 25 && bmiValue < 30) {
        setBmiInfo('You are above ideal weight.');
        setDietListInfo("above ideal");
      }
      else if (bmiValue >= 30 && bmiValue < 40) {
        setBmiInfo('You are way above the ideal weight (obese).');
        setDietListInfo("obese");
      }
      else if (bmiValue >= 40) {
        setBmiInfo('You are well above the ideal weight (morbidly obese).');
        setDietListInfo("morbid obese");
      }

      setBmiValue(props.bmi);
    }

    bmiMessage();
  }, [props.bmi, bmiValue]);

  return (
    <div className={styles.container}>
        <h1 className='mb-5'>Your BMI is {<span style={{color: "dodgerblue"}}>{bmiValue}</span>}</h1>
        <h2>BMI info: <span style={{color: "dodgerblue"}}>{bmiInfo}</span></h2>

        <div className='dietList mt-5'>
          <h4>Here's an ideal diet list for you to get healtier:</h4>
          <ul>
            {
              arr
                .filter((info) => info.state === dietListInfo)
                .map((filteredInfo, key) => (
                  <div key={key}>
                    <li key={`${key}_breakfast`}>Breakfast: {filteredInfo.breakfast}</li>
                    <li key={`${key}_lunch`}>Lunch: {filteredInfo.lunch}</li>
                    <li key={`${key}_dinner`}>Dinner: {filteredInfo.dinner}</li>
                  </div>
                ))
            }
          </ul>
        </div>
    </div>
  );
}

export default Result;