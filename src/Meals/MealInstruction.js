import React from "react";
import "../css/MealInstructions.css"

const MealInstructions = ({ meal }) => {
    const { strInstructions } = meal;
    let subString = strInstructions.split('\r')

    return(
        <div className="MealInstructions">
            <h1 style={{borderBottom: "1px solid black"}}>Instructions</h1>
            {subString.map(string => (<p>{string}</p>))}
        </div>
    )
}

export default MealInstructions;