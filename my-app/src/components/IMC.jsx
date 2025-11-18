// Atividade do Claude (1A)
import { useState } from "react";

const CalculateBMI = () => {
    const [weight, setWeight] = useState(0.0)
    const [height, setHeight] = useState(0.0)

    const BMI = weight && height ? weight / (height ** 2) : 0

    // const getClassification = () => {
    //     if (BMI === 0) return "";
    //     if (BMI < 18.5) return "Underweight";
    //     if (BMI >= 18.0 && BMI <= 24.9) return "Normal Weight";
    //     if (BMI >= 25 && BMI <= 29.9) return "Overweight" 
    //     return "obesity"

    // }

    const classification = BMI === 0 ? ""
        : BMI < 18.5 ? "Underweight"
        : BMI <= 24.9? "Normal weight"
        : BMI <= 29.9 ? "Overweight"
        : "Obesity"

    return (
        <div>
            {BMI > 0 ? (
                <p style={{textAlign: "center"}}>{`Your BMI is: ${BMI.toFixed(2)} and are classified as ${classification}`}
                </p>
            ) : null }
            <form style={{
                display: "flex",
                flexFlow: "column nowrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px"
            }}>
                <label htmlFor="ih">What is your height? (in meters) </label>
                <input
                type="number" 
                name="ih" 
                id="ih"
                value={height}
                onChange={({target}) => setHeight(target.value)}/>

                <label htmlFor="iw">What is your weight? (in Kg)</label>
                <input 
                type="number" 
                name="iw" 
                id="iw"
                value={weight}
                onChange={({target}) => setWeight(target.value)}/>
            </form>
        </div>
    )
}

export default CalculateBMI