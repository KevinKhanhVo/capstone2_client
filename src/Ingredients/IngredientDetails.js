import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MealCard from "../Meals/MealCard";
import "../css/IngredientDetails.css"

/**
 * Grab information from 1 meal using ID or NAME from params.
 * 
 * @returns Components to render the page.
 */
const IngredientDetails = () => {
    const { name } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`https://makeneat-express.herokuapp.com/ingredients/${name}`)
            .then(response => setData(response.data));
        }

        fetchData();
    }, [name])

    return(
      <div className="IngredientDetails">
        {data ?
            <div>
                <h1 style={{textAlign: "center"}}>{`Meals using ${name}`}</h1>
                <div className="IngredientDetails-grid">
                    {data.meals.map(meal => 
                    <div 
                        style={{cursor: "pointer"}}
                        className="IngredientDetails-grid-elements" 
                        key={meal.idMeal}
                        onClick={() => {navigate(`/meals/${meal.idMeal}`)}}
                    >
                        <MealCard key={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} />
                    </div>
                    )}
                </div>
            </div>
        :
            <h1 className="IngredientDetails-h1">Loading meals 🍖 ...</h1>
        }
      </div>
    )
}

export default IngredientDetails;