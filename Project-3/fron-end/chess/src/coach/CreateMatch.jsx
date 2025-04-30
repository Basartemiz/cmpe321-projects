import { useEffect } from "react";
import { useState } from "react";
import { useData } from "../DataContext";
import { useAuth } from "../login/AuthContext";

function CreateMatch() {
  const [match_id, setID] = useState(0);
  const [match_date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [hallId, setHallId] = useState("");
  const [tableId, setTableId] = useState("");
  const [team1, setTeam1] = useState("");
  const [arbiter, setArbiter] = useState("");

  const {user}=useAuth()

  const {
    fetchHalls,
    halls,

    teams,
    fetchTeams,

    fetchArbiters,
    arbiters,

    createMatch,

    getCoachTeam,
    team_id,

  }=useData()

  //get halls from backend

  useEffect(()=>{
    fetchHalls()
  },[]);

  useEffect(()=>{
    fetchTeams()
  },[]);

  useEffect(()=>{
    fetchArbiters()
  },[]);

  useEffect(()=>{
    getCoachTeam(user)
    console.log(user)
    console.log(team_id)
  },[]);



  if (!halls) {
    return <div>Loading Halls...</div>; 
  }

  if (!teams) {
    return <div>Loading Teams...</div>; 
  }

  if (!arbiters) {
    return <div>Loading Arbiters...</div>; 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const matchData = {
      match_id,
      match_date,
      time_slot: timeSlot,
      hall_id: hallId,
      table_id: tableId,
      team1_id: team_id,
      team2_id:team1,
      arbiter_username: arbiter,
    };

    const status=await createMatch(matchData)
    if(status!=="ok"){
      console.log(status)
    }

    
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "500px" }}>
        <h2 className="text-center mb-4 text-primary">Create Match</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-bold">Match ID</label>
            <input
              type="number"
              className="form-control"
              value={match_id}
              onChange={(e) => setID(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Match Date</label>
            <input
              type="date"
              className="form-control"
              value={match_date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

         
          <div className="mb-3">
            <label className="form-label fw-bold">Time Slot</label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 1"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              required
            />
          </div>

         
          <div className="mb-3">
            <label className="form-label fw-bold">Hall</label>
            <select
              className="form-select"
              value={hallId}
              onChange={(e) => setHallId(e.target.value)}
              required
            >
              <option value="">Select Hall</option>
              {halls.map(({hall_id,hall_name}) => (
                <option key={hall_id} value={hall_id}>
                  {hall_name}
                </option>
              ))}
            </select>
          </div>

         
          <div className="mb-3">
            <label className="form-label fw-bold">Table ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Table ID"
              value={tableId}
              onChange={(e) => setTableId(e.target.value)}
              required
            />
          </div>

         
          <div className="mb-3">
            <label className="form-label fw-bold">Team 1</label>
            <select
              className="form-select"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
              required
            >
              <option value="">Select Team 1</option>
              {teams.map(({team_name,team_id}, idx) => (
                <option key={team_id} value={team_id}>
                  {team_id}
                </option>
              ))}
            </select>
          </div>

          
          <div className="mb-3">
            <label className="form-label fw-bold">Select Arbiter</label>
            <select
              className="form-select"
              value={arbiter}
              onChange={(e) => setArbiter(e.target.value)}
              required
            >
              <option value="">Select Arbiter</option>
              {arbiters.map(({username}, idx) => (
                <option key={username} value={username}>
                  {username}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Create Match
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateMatch;