import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/IngredientCard.css";

const IngredientCard = ({ prep }) => {
    const navigate = useNavigate();
    const ingredient_img_url = "https://www.themealdb.com/images/ingredients/";

    return(
        <>
            {Object.keys(prep).map((key, index) => {
                return (
                    <div key={key} className="IngredientCard">
                        <div onClick={() => {navigate(`/ingredients/${key}`)}} >
                            <div className="IngredientCard-name">
                                {key}
                            </div>
                            <img 
                                src={`${ingredient_img_url}${key}.png`}
                                alt={key}
                                width="125px"
                                height="125px"
                            />
                        </div>
                        <div className="IngredientCard-prep">
                            <p>{prep[key]}</p>
                        </div>
                    </div>   
                )
            })}
        </>
    )
}

export default IngredientCard;