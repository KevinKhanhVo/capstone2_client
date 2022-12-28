import React from "react";
import "../css/MealDescription.css";

const MealDescription = ({ name, area, category, tags, video }) => {
    if(tags) tags = tags.replaceAll(',', ' #');

    return(
        <div className="MealDescription">
            <h1 className="MealDescription-h1">{name}</h1>

            <div className="MealDescription-p">
                <p><b>Area:</b> {area}</p>
                <p><b>Category: </b>{category}</p>
            </div>

            <p 
                className="MealDescription-tag"
                style={{textTransform: "lowercase"}}>
                    {tags ? "#" + tags : ""}
            </p>

            <a href={video}>
                <button className="MealDescription-button">Recipe video</button>
            </a>
        </div>
    )
}

export default MealDescription;