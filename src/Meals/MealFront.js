import React from "react";
import "../css/MealFront.css";

const MealFront = () => {
    return(
        <div className="MealFront">
            <div className="MealFront-img"></div>
            <div className="MealFront-header">
                <h1 className="MealFront-h1">Make N' Eat</h1>
                <div className="MealFront-p">
                    <p>View meal recipes with instructions.</p>
                    <p>More than a hundred recipes all over the world. </p>
                </div>
            </div>
        </div>
    )
}

export default MealFront;