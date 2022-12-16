import React, { useEffect, useState } from "react";
import axios from "axios";

const useSearch = (term) => {
    const SEARCH_BY_NAME = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    const [data, setData] = useState(null);
    const [mealName, setMealName] = useState(term);

    function searchMealName(term){
        setMealName(term);
    }

    useEffect(function fetchUserOnUsernameChange() {
        async function fetchMeal(){
            const mealResult = await axios.get(SEARCH_BY_NAME + mealName);
            setData(mealResult.data);    
        };

        fetchMeal();
    }, [mealName])

  return { data, searchMealName };
};

export default useSearch;