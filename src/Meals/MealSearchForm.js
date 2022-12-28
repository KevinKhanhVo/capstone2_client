import React, { useContext } from "react";
import UserContext from "../UserContext";
import axios from 'axios';
import "../css/MealSearchForm.css"

const MealSearchForm = ({ searchFilter }) => {
    const { BASE_URL } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        let search = e.target.name.value === "" ? "" : `?name=${e.target.name.value}`;

        axios.get(`${BASE_URL}/meals` + search)
            .then(response => searchFilter(response.data))
    }
    
    return (
        <form className="MealSearchForm" onSubmit={handleSubmit}>
            <input
                id="name"
                name="name"
                placeholder="meal name"
                type="text"
            />
            <button className="MealSearchForm-button">Search</button>
        </form>
    );
  }

export default MealSearchForm;