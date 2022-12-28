import React, { useState, useEffect, useContext } from "react";
import MealInstructions from "./MealInstruction";
import MealDescription from "./MealDescription";
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
                    <div className="MealDetails-profile">
                        <img 
                            src={data.meals[0].strMealThumb}
                            alt={data.meals[0].strMeal}
                            width="600px"
                            height="550px"
                        />
                        <div className="MealDetails-child">
                            <MealDescription
                                name={data.meals[0].strMeal} 
                                area={data.meals[0].strArea}
                                category={data.meals[0].strCategory}
                                tags={data.meals[0].strTags}
                                video={data.meals[0].strYoutube}
                            />
                        </div>
                    </div>
                    <div>
                        <IngredientList meal={data.meals[0]}/>
                    </div>
                    <div>
                        <MealInstructions meal={data.meals[0]}/>
                    </div>
                    <div>
                        <Reviews meal_id={data.meals[0].idMeal}/> 
                    </div>
                </div>
            :
                <h1 className="MealDetails-h1">Loading meal details ...</h1>
            }
        </div>
    )
}

export default MealDetails;