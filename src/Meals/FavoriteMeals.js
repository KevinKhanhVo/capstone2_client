import React, { useContext } from 'react'
import MealCard from './MealCard';
import { useNavigate } from 'react-router-dom';
import UserContext from "../UserContext";
import "../css/FavoriteMeals.css";

const FavoriteMeals = () => {
    const navigate = useNavigate();
    const { handleFavorite, favoriteData } = useContext(UserContext);

    return (
        <div>
            {favoriteData ? 
                favoriteData.length === 0 ? 
                    <h1 style={{textAlign: "center"}}>No favorite meals</h1>
                :
                    <div  className="FavoriteMeals">
                    {favoriteData.map(meal =>
                        <div>
                            <div 
                                className="FavoriteMeals-grid" key={meal.meals[0].idMeal}
                                onClick={() => {navigate(`/meals/${meal.meals[0].idMeal}`)}}
                            >
                                <MealCard key={meal.meals[0].idMeal} name={meal.meals[0].strMeal} image={meal.meals[0].strMealThumb} />
                            </div>
                            <button className="FavoriteMeals-button" onClick={() => handleFavorite('DELETE', meal.meals[0].idMeal)}>🤍</button>
                        </div>
                    )}
                    </div>
            : 
                <h1 className="FavoriteMeals-h1">Loading favorite meals ...</h1>
            }
        </div>
    )
}

export default FavoriteMeals;