import { useState } from "react";

const Match = (props) => {
  const {
    match_id,
    date,
    time_slot,
    hall_id,
    table_id,
    team1_id,
    team2_id,
    arbiter_username,
    ratings,
    
  } = props;
  //delete match from database
  const handleDelete=()=>{

  }

  return (
    <div className="card shadow-sm m-3" style={{ width: "20rem" }}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">Match ID: {match_id}</h5>
        
        <p className="card-text">
          <strong>Date:</strong> {date} <br />
          <strong>Time Slot:</strong> {time_slot} <br />
          <strong>Hall:</strong> {hall_id} <br />
          <strong>Table:</strong> {table_id} <br />
          <strong>Team 1:</strong> {team1_id} <br />
          <strong>Team 2:</strong> {team2_id} <br />
          <strong>Arbiter:</strong> {arbiter_username} <br />
          <strong>Ratings:</strong> {ratings}
        </p>

        <button
          type="button"
          className="btn btn-danger mt-auto"
          onClick={() => handleDelete(match_id)}
        >
          Delete Match
        </button>
      </div>
    </div>
  );
};

export default Match;