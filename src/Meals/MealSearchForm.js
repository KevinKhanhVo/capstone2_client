import React, { useContext } from "react";
import UserContext from "../UserContext";
import axios from 'axios';

const MealSearchForm = ({ searchFilter }) => {
    const { BASE_URL } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        let search = e.target.name.value === "" ? "" : `?name=${e.target.name.value}`;

        axios.get(`${BASE_URL}/meals` + search)
            .then(response => searchFilter(response.data))
    }
    
    return (
        <form className="CompanySearchFilter" onSubmit={handleSubmit}>
            <input
                id="name"
                name="name"
                placeholder="meal name"
                type="text"
            />
            <button>Search</button>
        </form>
    );
  }

export default MealSearchForm;