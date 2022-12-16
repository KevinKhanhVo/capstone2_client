import React, { useState, useEffect, useContext } from "react";
import MealCard from "./MealCard";
import MealInstructions from "./MealInstruction";
import IngredientList from "../Ingredients/IngredientList";
import Reviews from "../Reviews/Review";
import {useParams} from "react-router-dom";
import UserContext from "../UserContext";
import axios from "axios";
import "../css/MealDetails.css"

/**
 * Grab information from 1 meal using ID or NAME from params.
 * 
 * @returns Components to render the page.
 */
const MealDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const { BASE_URL } = useContext(UserContext);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`${BASE_URL}/meals/${id}`)
            .then(response => setData(response.data));
        }

        fetchData();
    }, [id, BASE_URL])

    return(
        <div className="MealDetails">
            {data ? 
            <div>
                <div className="MealDetails-grid">
                    <div className="MealDetails-left">
                        <MealCard name={data.meals[0].strMeal} image={data.meals[0].strMealThumb}/>
                        <div style={{textAlign: "center"}}>
                            <a href={data.meals[0].strYoutube}>Recipe video</a>
                        </div>
                    </div>
                    <div className="MealDetails-right">
                        <IngredientList meal={data.meals[0]}/>
                    </div>
                    <div className="MealDetails-bottom-left">
                        <MealInstructions meal={data.meals[0]}/>
                    </div>
                    <div className="MealDetails-bottom-right">
                        <Reviews meal_id={data.meals[0].idMeal}/> 
                    </div>
                </div>
            </div>
            :
                <h1 className="MealDetails-h1">Loading meal details ...</h1>
            }
        </div>
    )
}

export default MealDetails;