import React from "react";

const MealDescription = ({ name, area, category, tags, video }) => {
    if(tags) tags = tags.replaceAll(',', ' #');

    return(
        <div className="MealDescription">
            <h1>{name}</h1>
            <h4>Area: {area}</h4>
            <h4>Category: {category}</h4>
            <p style={{textTransform: "lowercase"}}>#{tags}</p>
            <a href={video}>Recipe video</a>
        </div>
    )
}

export default MealDescription;