import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Navbar';
import UserContext from './UserContext';
import UserSignupForm from './Users/UserSignupForm';
import UserLoginForm from './Users/UserLoginForm';
import MealHome from './Meals/MealHome';
import MealDetails from './Meals/MealDetails';
import AllMeals from './Meals/AllMeals';
import IngredientDetails from './Ingredients/IngredientDetails';
import FavoriteMeals from './Meals/FavoriteMeals';
import PrivateRoute from './PrivateRoute';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import "./css/App.css";

function App() {
  //For testing.
  // const BASE_URL = "http://localhost:3001";

  //For production.
  const BASE_URL = "https://capstone2-api.herokuapp.com"; 

  const CURR_TOKEN = JSON.parse(localStorage.getItem('token')) || null;

  const [userToken, setUserToken] = useState(CURR_TOKEN);
  const [username, setUsername] = useState(null);
  const [favoriteData, setFavoriteData] = useState(null);

  useEffect(() => {
    if(userToken){
      localStorage.setItem('token', JSON.stringify(userToken))
      const { username } = jwt_decode(userToken.token);
      setUsername(username);
    }

  }, [userToken])

  useEffect(() => {
    if(userToken){
      const fetchData = async () => {
        const response = await axios.get(`${BASE_URL}/favorites/${username}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userToken.token
            }
        })

        if(response){
            let requests = response.data.map(meal => fetch(`${BASE_URL}/meals/${meal.meal_id}`));

            Promise.all(requests)
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(response => setFavoriteData(response));
        }
      }
      fetchData();
    }

}, [userToken, BASE_URL, username])

  const handleSetToken = (token) => {
    setUserToken(token);
  }

  const logout = () => {
    localStorage.removeItem('token');
    setUsername(null);
    setUserToken(null);
  }

  const handleFavorite = (method, meal_id) => {
    const options = {
      method: method,
      url: `${BASE_URL}/favorites/${username}/${meal_id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': userToken.token
      }
    }

    axios(options).then(response => {
      alert(response.data.message)
    }).catch((error) => {
      if(error.response){
        alert(error.response.data.error.message);
      }
    })
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ username, userToken, handleSetToken, logout, handleFavorite, BASE_URL, favoriteData }} >
          <Navbar/>

          <Routes>
            <Route exact path="/" element={<MealHome />}/>
            <Route exact path="/users/register" element={<UserSignupForm />}/>
            <Route exact path="/users/login" element={<UserLoginForm />}/>
            <Route exact path="/meals/" element={<AllMeals handleFavorite={handleFavorite} />}/>
            <Route exact path="/meals/:id" element={<MealDetails handleFavorite={handleFavorite} />} />
            <Route exact path="/ingredients/:name" element={<IngredientDetails />} />

            <Route path="/favorites" element={
              <PrivateRoute username={username}>
                <FavoriteMeals />
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>   
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
