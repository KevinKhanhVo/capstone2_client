import React from "react";
import "../css/IngredientCard.css";

const IngredientCard = ({ prep }) => {
    const ingredient_img_url = "https://www.themealdb.com/images/ingredients/";

    return(
        <>
            {Object.keys(prep).map((key, index) => {
                return (
                    <div key={key} className="IngredientCard">
                        <a href={`/ingredients/${key}`} >
                            <div className="IngredientCard-name">
                                {key}
                            </div>
                            <img 
                                src={`${ingredient_img_url}${key}.png`}
                                alt={key}
                                width="100px"
                                height="100px"
                            />
                        </a>
                        <p>{prep[key]}</p>
                    </div>   
                )
            })}
        </>
    )
}

export default IngredientCard;