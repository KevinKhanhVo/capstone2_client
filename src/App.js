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
import axios from 'axios';

function App() {
  const CURR_USER = JSON.parse(localStorage.getItem('user')) || null;
  const [user, setUser] = useState(CURR_USER);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const currentUser = (user) => {
    setUser(user);
  }

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null)
  }

  const handleFavorite = (method, meal_id) => {
    const options = {
      method: method,
      url: `/favorites/${meal_id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user ? user.token : "" 
      }
    }

    axios(options).then(response => {
        alert(response.data.message);
    })
    .catch((error) => {
        if(error.response){
            alert(error.response.data.message)
      }
    })
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={ { user, currentUser, logout, handleFavorite } } >
          <Navbar/>

          <Routes>
            <Route exact path="/" element={<MealHome />}/>
            <Route exact path="/users/register" element={<UserSignupForm />}/>
            <Route exact path="/users/login" element={<UserLoginForm />}/>
            <Route exact path="/meals/" element={<AllMeals handleFavorite={handleFavorite} />}/>
            <Route exact path="/meals/:id" element={<MealDetails handleFavorite={handleFavorite} />} />
            <Route exact path="/ingredients/:name" element={<IngredientDetails />} />
            <Route exact path="/favorites/" element={<FavoriteMeals /> } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>   
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
