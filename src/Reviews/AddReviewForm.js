import React, { useState, useContext } from "react";
import { Button, Form, Label, Input } from 'reactstrap';
import axios from 'axios';
import Select from 'react-select'
import UserContext from '../UserContext';
import "../css/AddReviewForm.css";

const AddReviewForm = ({ meal_id }) => {
    const { user } = useContext(UserContext);

    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
      ]

    const [comment, setComment] = useState("")
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOnChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        axios.post(`https://makeneat-express.herokuapp.com/reviews/${meal_id}`, 
            {
                comment: comment,
                rating: selectedOption.value
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': user.token
                }
            }
        )
        .catch((error) => {
            if (error.response) {
                alert(error.response.data.message);
            }
        })
    }

    return (
        <>
        <div className="AddReviewForm">
        <h4>Add a new review</h4>
        <Form 
            className="AddReviewForm-form"
            onSubmit={handleSubmit}
        >
            <div className="AddReviewForm-comp">
                <Label for="rating">Select rating</Label>
                <Select 
                    className="basic-single"
                    options={options} 
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                />
            </div>
            
            <div className="AddReviewForm-comp">
                <Label for="comment">Comment</Label>
                <Input
                    id="comment"
                    name="comment"
                    type="textarea"
                    value={comment}
                    onChange={handleOnChange}
                />
            </div>
            
            <Button>Add</Button>
        </Form>
        </div>
        </>
    );
  }

export default AddReviewForm;