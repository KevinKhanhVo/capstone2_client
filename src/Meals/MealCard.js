import React from "react";
import "../css/MealProfile.css"

const MealCard = ({ name, image }) => {
    return(
        <div className="MealProfile">
            <h3 className="MealProfile-h3">{name}</h3>
            <div style={{cursor: "pointer"}}>
                <img src={image} width="300px" height="300px" alt={name}/>
            </div>
        </div>
    )
}

export default MealCard;