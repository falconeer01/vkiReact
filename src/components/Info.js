import React from 'react';
import styles from './styles.module.css';

function Info() {
  return (
    <div className={styles.generalInfo}>
        <h4 style={{color: 'GrayText'}}>General Promotion</h4>
        <hr style={ {color: 'dodgerblue', borderWidth: "2px"} }/>

        <div className={styles.divPart}>
            <h5 className={styles.miniTitle}>What is Body Mass Index (BMI)?</h5>
            <article>
                Body mass index (BMI) or height-weight index; It is a calculation method that shows the estimated fat percentage in a person's body. In this method, the person's height-weight ratio is taken as basis. According to the result of the index, the closeness and distance of the person's current weight to his ideal weight can be calculated.
            </article>
        </div>
        
        <div className={styles.divPart}>
            <h5 className={styles.miniTitle}>How Is Your BMI Calculating?</h5>
            <p>Body mass index is calculated by dividing body weight by the square of height (kg/m²).</p>
            <ul className='bmiResults'>
                <li>Results below 18.5 kg/m²: Below ideal weight</li>
                <li>Results between 18.5 kg/m² and 24.9 kg/m²: At ideal weight</li>
                <li>Results between 25 kg/m² and 29.9 kg/m²: Above ideal weight</li>
                <li>Results between 30 kg/m² and 39.9 kg/m²: Way above the ideal weight (obese)</li>
                <li>Results over 40 kg/m²: Well above the ideal weight (morbidly obese)</li>
            </ul>
        </div>
        
        <div className={styles.divPart}>
            <h5 className={styles.miniTitle}>What Do Body Mass Index Results Mean??</h5>
            <article>
            Factors such as fat percentage, body type, fat and muscle tissue are not included in the body mass index calculation. For this reason, experts obtain more detailed information about the person's weight problem by measuring the metabolic rate and detailed body analysis, in addition to measuring the body mass index and waist circumference in calculating the ideal weight. Being below or above the person's ideal weight; It should be evaluated by the physician together with other factors. One should act together with the physician to eliminate existing health problems and prevent possible health problems. <br /><br />

            In men, if the waist circumference exceeds 94 cm, it is considered increased risk, and if it exceeds 102 cm, it is considered high risk. For women, if this ratio exceeds 80 cm, it is considered increased risk, and if it exceeds 88 cm, it is considered high risk.
            </article>
        </div>
        
        <div className={styles.divPart}>
            <h5 className={styles.miniTitle}>Obesity Calculation with Detailed Body Mass Index</h5>
            <article>
                With a detailed body mass index, it can be learned whether the weight, body fat percentage and waist circumference are within normal values, taking into account age and gender when calculating obesity. <br /><br />

                First of all, knowing where the fat tissue is collected in the body is very important for the diagnosis and treatment of obesity. The way fat tissue accumulates in the body; It can be divided into two types: apple type and pear type. <br /><br />

                In apple type obesity, fat accumulates around the belly. In pear type obesity, it is observed that it accumulates in the hips and hips. However, the fat accumulated around the belly is considered to be more dangerous and has a higher risk of heart disease than the hips and hips. <br /><br />
            </article>
        </div>
        
        <div className={styles.divPart}>
            <h5 className={styles.miniTitle}>What to Consider Apart from Body Mass Index?</h5>
            <article>
                Fats accumulated in the body produce hormones that are harmful to the body. Fat, especially around the waist, can lead to many health problems. In addition to the body mass index value, waist circumference provides information about the degree of obesity. <br /><br />

                The ratio of healthy muscle tissue to harmful fat tissue is also important in calculating obesity. An adult man is expected to have 12-18% body fat, while women are expected to have 20-28%. Body fat ratio is 25% in men; In women, if it exceeds 30%, it is associated with obesity. <br /><br />
            </article>
        </div>
    </div>
  );
}

export default Info;
