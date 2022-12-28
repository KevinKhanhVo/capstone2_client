import React, { useState, useEffect, useContext } from "react";
import MealCard from "./MealCard";
import MealSearchForm from "./MealSearchForm";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import axios from "axios";
import "../css/AllMeals.css";

const AllMeals = () => {
    const [data, setData] = useState(null);
    const [favorite, setFavorite] = useState(null);
    const navigate = useNavigate();
    const { username, handleFavorite, BASE_URL, favoriteData } = useContext(UserContext);
    

    useEffect(() => {
        const fetchData = async () => {
            axios.get(BASE_URL + "/meals")
            .then(response => setData(response.data));
        }

        const fetchFavorites = async () => {
            await setFavorite(favoriteData.map(meal => meal.meals[0].idMeal));
        }

        fetchData();
        fetchFavorites();
    }, [BASE_URL, favoriteData])

    const searchFilter = (data) => {
        setData(data);
    }

    return(
        <div className="AllMeals">
            {data ?
                data.meals !== null ?
                    <div>
                        <div className="AllMeals-search">
                            <MealSearchForm searchFilter={searchFilter} />
                        </div>

                        <div className="AllMeals-grid">
                        {data.meals.map(meal => (
                            <div>
                                <div 
                                    className="AllMeals-grid-element" 
                                    key={meal.idMeal} 
                                    onClick={() => {navigate(`/meals/${meal.idMeal}`)}}
                                >
                                    <MealCard key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} />
                                </div>
                                { username ? 
                                    favorite.includes(meal.idMeal) ?
                                        <button className="AllMeals-unfavorite" onClick={() => handleFavorite('DELETE', meal.idMeal)}>🤍</button>
                                    :
                                        <button className="AllMeals-favorite" onClick={() => handleFavorite('POST', meal.idMeal)}>❤️</button>
                                :
                                    null
                                }
                            </div>
                        ))}
                        </div>
                    </div>
                :
                    <div className="AllMeals-search">
                        <MealSearchForm searchFilter={searchFilter} />
                        <h1>Cannot find the meal ... 🥹</h1>
                    </div>
            :

                <h1 className="AllMeals-h1">Loading meals 🍖 ...</h1>
            }
        </div>
    )
}

export default AllMeals;