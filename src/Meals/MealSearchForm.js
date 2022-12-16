import React from "react";
import axios from 'axios';

const MealSearchForm = ({ searchFilter }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        let search = e.target.name.value === "" ? "" : `?name=${e.target.name.value}`;

        axios.get("https://capstone2-api.herokuapp.com/meals" + search)
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