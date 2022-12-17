import React from "react";
import "../css/MealInstructions.css"

const MealInstructions = ({ meal }) => {
    const { strInstructions } = meal;
    let subString = strInstructions.split('\r')

    return(
        <div className="MealInstructions">
            {subString.map(string => (<p>{string}</p>))}
        </div>
    )
}

export default MealInstructions;