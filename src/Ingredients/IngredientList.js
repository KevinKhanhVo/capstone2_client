import React from "react";
import IngredientCard from "./IngredientCard"
import "../css/IngredientList.css";

const IngredientList = ({ meal}) => {
    let ingredients = [];
    let measurements = [];

    for(let key in meal){
        if(key.startsWith('strIngredient') && meal[key] !== null && meal[key] !== ""){
            ingredients.push(meal[key]);
        }

        if(key.startsWith('strMeasure') && meal[key] !== null && meal[key] !== ""){
            measurements.push(meal[key]);
        }
    }

    const mealObj = ingredients.reduce((accumulator, element, index) => {
        return {...accumulator, [element]: measurements[index]};
      }, {});

    return(
        <div className="IngredientList">
            <IngredientCard prep={mealObj} />
        </div>
    )
}

export default IngredientList;