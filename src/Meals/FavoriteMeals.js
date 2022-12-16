import React, { useEffect, useState, useContext } from 'react'
import MealCard from './MealCard';
import { useNavigate } from 'react-router-dom';
import UserContext from "../UserContext";
import axios from 'axios';
import "../css/FavoriteMeals.css";

const FavoriteMeals = () => {
    const [data, setData] = useState(null);
    const navigate = useNavigate();
    const { userToken, handleFavorite } = useContext(UserContext);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://capstone2-api.herokuapp.com/favorites', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': userToken.token
                }
            })

            if(response){
                let requests = response.data.map(meal => fetch(`https://capstone2-api.herokuapp.com/meals/${meal.meal_id}`));
    
                Promise.all(requests)
                .then(responses => Promise.all(responses.map(res => res.json())))
                .then(response => setData(response));
            }
        }

        fetchData();
    }, [userToken])

    return (
        <div>
            {data ? 
                data.length === 0 ? 
                    <h1 style={{textAlign: "center"}}>No favorite meals</h1>
                :
                    <div  className="FavoriteMeals">
                    {data.map(meal =>
                        <div>
                            <div 
                                className="FavoriteMeals-grid" key={meal.meals[0].idMeal}
                                onClick={() => {navigate(`/meals/${meal.meals[0].idMeal}`)}}
                            >
                                <MealCard key={meal.meals[0].idMeal} name={meal.meals[0].strMeal} image={meal.meals[0].strMealThumb} />
                            </div>
                            <button className="FavoriteMeals-button" onClick={() => handleFavorite('DELETE', meal.meals[0].idMeal)}>Unfavorite</button>
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