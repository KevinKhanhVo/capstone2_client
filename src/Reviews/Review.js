import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AddReviewForm from './AddReviewForm';
import UserContext from '../UserContext';
import "../css/Reviews.css"

const Review = ({ meal_id }) => {
    const [data, setData] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`https://makeneat-express.herokuapp.com/reviews/${meal_id}`)
            .then(response => setData(response.data));
        }

        fetchData();
    }, [meal_id])

    const handleDelete = async () => {
        axios.delete(`https://makeneat-express.herokuapp.com/reviews/${meal_id}`, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user.token
            }
        })
        .catch((error) => {
            if(error.response){
                alert(error.response.data.message);
            }
        })
    }

    return (
        <div>
            {data ?
                <div>
                    <div className="Reviews">
                    {data.map(review => (
                        <div key={review.id} className="Reviews-each">
                            <b style={{ textTransform: 'capitalize'}}>{review.firstname} {review.lastname}</b>
                            <p>{"⭐".repeat(review.rating)}</p>
                            <p>{review.comment}</p>

                            {user && user.id === review.user_id ? 
                                <button onClick={handleDelete}>Remove</button>
                            :
                                null
                            }
                        </div>
                    ))}
                    </div>
                    {user ? 
                        <AddReviewForm meal_id={meal_id} />
                    :
                        null
                    }
                    </div>
            :
                <h1>Loading reviews...</h1>
            }
        </div>
    )
}  

export default Review;