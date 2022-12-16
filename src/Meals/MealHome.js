import React from "react";
import MealCarousel from './MealCarousel';
import MealFront from "./MealFront";

import "../css/MealHome.css";

const MealHome = () => {
    return (
        <>
            <MealFront />
            <div className="MealHome">
                <div className="MealHome-header">
                    <h1 className="MealHome-h1">Check out our popular selections!</h1>
                    <h4 className="MealHome-h4">Click to view in great details</h4>
                </div>
                <MealCarousel />
            </div>
        </>
        
    )
}

export default MealHome;