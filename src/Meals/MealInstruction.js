import React from "react";

const MealInstructions = ({ meal }) => {
    const { strInstructions } = meal;
    let subString = strInstructions.split('\r')

    return(
        <div>
            {subString.map(string => (<p>{string}</p>))}
        </div>
    )
}

export default MealInstructions;