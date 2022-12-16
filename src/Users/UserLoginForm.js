import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from "../UserContext";
import "../css/UserForm.css";

const UserLoginForm = () => {
    const [formData, setFormData] = useState({})
    const [formErrors, setFormErrors] = useState(null);
    const { handleSetToken } = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const{ name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("https://capstone2-api.herokuapp.com/users/login", formData )
        .then((response => {
            if(response.data.token){
                navigate('/')
                handleSetToken(response.data);
            }
        }))
        .catch((error) => {
            setFormErrors(error.response.data.error.message)
        })
    }

    return (
        <div className="UserForm">
            <h1>Login</h1>

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
                    <label htmlFor="username">Username</label>
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
                    <button className="UserForm-button">Submit</button>
                </div>
            </form>
        </div>
    );
  }

export default UserLoginForm;