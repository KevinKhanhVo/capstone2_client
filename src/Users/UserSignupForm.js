import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../UserContext";
import axios from 'axios';
import "../css/UserForm.css";

const UserSignupForm = () => {
    const [formData, setFormData] = useState(null)
    const [formErrors, setFormErrors] = useState(null);
    const navigate = useNavigate();
    const { handleSetToken, BASE_URL } = useContext(UserContext);

    const handleChange = (e) => {
        const{ name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${BASE_URL}/users/register`, formData)
        .then(response => {
            navigate('/')
            handleSetToken(response.data);
        })
        .catch((error) => {
            setFormErrors(error.response.data.error.message)
            console.log(error);
        })
    }

    return (
        <div className="UserSignupForm">
            <div className="UserForm">
                <h1>Sign up</h1>

                {formErrors ? 
                    <div className="UserForm-errors">
                        {formErrors.map(error => (
                            <p>{error}</p>
                        ))}
                    </div>
                : 
                    null
                }
                
                <form className="UserForm-form" onSubmit={handleSubmit}>
                    <div className="UserForm-container">
                        <label htmlFor="username" style={{borderTop: "1px solid black"}}>Username</label>
                        <input
                            id="username"
                            name="username"
                            placeholder="username"
                            type="text"
                            onChange={handleChange}
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            onChange={handleChange}
                        />

                        <label htmlFor="firstName">First name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            placeholder="first name"
                            type="text"
                            onChange={handleChange}
                        />

                        <label htmlFor="lastName">Last name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            placeholder="last name"
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <button className="UserForm-button">Submit</button>
                </form>
            </div>
        </div>
    );
  }

export default UserSignupForm;