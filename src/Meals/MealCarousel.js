import React from "react";
import initial_meals from "./MealInitial";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";
import "../css/MealCarousel.css";

const MealCarousel = () => {
    const navigate = useNavigate();

    return(
        <Carousel className="Carousel" autoPlay infiniteLoop>
            {initial_meals.map(meal => 
                <div 
                    style={{cursor: "pointer"}}
                    key={meal.id}
                    onClick={() => {navigate(`meals/${meal.id}`)}} 
                >
                    <img 
                        src={meal.img} 
                        alt={meal.name} 
                    />
                    <p 
                        style={{ opacity: 1, backgroundColor: "black", fontSize: "20px" }} 
                        className="legend">
                            {meal.name}
                    </p>
                </div>
            )}
        </Carousel>
    )
}

export default MealCarousel;