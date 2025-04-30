
import { useNavigate } from "react-router-dom";
import { useData } from "../DataContext";

const Match = (props) => {

  const {deleteMatch}=useData()
  const navigate=useNavigate()
  function format(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');  
    const year = date.getFullYear();
    return `${day},${month},${year}`;
  }

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
  const handleDelete=()=>{
      const data=deleteMatch(match_id)
      console.log(data.status)
      navigate("/")
  }

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