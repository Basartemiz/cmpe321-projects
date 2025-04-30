import { useState } from "react";

function format(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');  
  const year = date.getFullYear();
  return `${day},${month},${year}`;
}

const RateMatch = (props) => {
    const [rating,setRating]=useState(0)

    const {
      match_id,
      match_date,
      time_slot,
      hall_id,
      table_id,
      team1_id,
      team2_id,
      arbiter_username,
      ratings,
      
    } = props;
    //delete match from database
    const handleRate=()=>{
  
    }

    const valid = (date, rating) => {
      return (rating == 0 || !rating) && new Date(date) < new Date();
    };
    
  
    return (
      <div className="card shadow-sm m-3" style={{ width: "20rem" }}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-center">Match ID: {match_id}</h5>
          
          <p className="card-text">
            <strong>Date:</strong> {format(match_date)} <br />
            <strong>Time Slot:</strong> {time_slot} <br />
            <strong>Hall:</strong> {hall_id} <br />
            <strong>Table:</strong> {table_id} <br />
            <strong>Team 1:</strong> {team1_id} <br />
            <strong>Team 2:</strong> {team2_id} <br />
            <strong>Arbiter:</strong> {arbiter_username} <br />
            <strong>Ratings:</strong> {ratings}
          </p>
  
          <button disabled={!valid(match_date,ratings)}
            type="button"
            className="btn btn-danger mt-auto"
            onClick={() => handleRate(match_id)}
          >
            Rate Match
          </button>
          <label className="form-label fw-bold">Select rating</label>
            <select
              className="form-select"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              

            </select>
        </div>
      </div>
    );
  };
  
  export default RateMatch;