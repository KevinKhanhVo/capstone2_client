import React from "react";
import "../css/MealFront.css";

const MealFront = () => {
    return(
        <div className="MealFront">
            <div className="MealFront-img"></div>
            <div className="MealFront-header">
                <h1 style={{marginBottom: "50px"}}>Make N' Eat</h1>
                <h5>View different recipes and instructions on how to prep them.</h5>
                <p>More than hundreds of recipes and ingredients for prepped meals!</p>
            </div>
        </div>
    )
}

export default MealFront;