import { useState } from "react";
import { useAuth } from "../login/AuthContext";
import { useData } from "../DataContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CoachAdd() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(0);
  const [error, setError] = useState("");

  const [firstName,    setFirstName]    = useState("");    

  const [surname,      setSurname]      = useState("");     

  const [nationality,  setNationality]  = useState("");  

  const [contractStart,setContractStart]= useState(""); 
       
  const [contractEnd,setContractEnd] = useState("");   


  //context values

  const {teams,fetchTeams,addCoach}=useData()

  //get teams
  useEffect(()=>{
    fetchTeams()
  },[])

  if (!teams) {
    return <div>Loading...</div>; // Shows loading screen
  }
  
  
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.");
      setPassword("");
      setTimeout(() => { setError(""); }, 3000);
      return;
    } else {
      setError("");
    }


    const userData = {
      username,
      password,
      firstName,
      surname,
      nationality,
      selectedTeam ,
      contractStart,
      contractEnd,
    };

    const data = await addCoach(userData);
    //check if adding was succesful
    if(data.status!="ok"){
      setError(data.status);
      setPassword("");
      setTimeout(() => { setError(""); }, 6000);
      return
    }
    

  };

  const validatePassword = (password) => {
    const lengthCheck = password.length >= 8;
    const upperCheck = /[A-Z]/.test(password);
    const lowerCheck = /[a-z]/.test(password);
    const digitCheck = /[0-9]/.test(password);
    const specialCheck = /[@#$%&*!]/.test(password);
    return lengthCheck && upperCheck && lowerCheck && digitCheck && specialCheck;
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <span className="navbar-brand">Chess Admin</span>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/addUser" className="nav-link">
            Players
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addCoach" className="nav-link">
            Coaches
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addArbiter" className="nav-link">
            Arbiters
          </Link>
        </li>
      </ul>
    </div>
  </nav>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary bg-gradient">
      <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4 text-primary">Register User</h2>

        <form onSubmit={handleLogin}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label className="form-label fw-bold">username</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-2"><label className="fw-bold">Name</label>
              <input className="form-control" value={firstName} onChange={e=>setFirstName(e.target.value)} required/>
            </div>
            <div className="mb-2"><label className="fw-bold">Surname</label>
              <input className="form-control" value={surname} onChange={e=>setSurname(e.target.value)} required/>
            </div>

            <div className="mb-2"><label className="fw-bold">Nationality</label>
              <input className="form-control" value={nationality} onChange={e=>setNationality(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Select Team </label>
              <select
                className="form-select"
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                
                {teams.map(({team_id,team_name}, idx) => (
                  <option key={team_id} value={team_id}>{team_id}</option>
                ))}
              </select>
            </div>

        
            <div className="mb-2"><label className="fw-bold">contract start</label>
              <input type="date" className="form-control" value={contractStart} onChange={e=>setContractStart(e.target.value)} />
            </div>
            <div className="mb-2"><label className="fw-bold">contract end</label>
              <input type="date" className="form-control" value={contractEnd} onChange={e=>setContractEnd(e.target.value)} />
            </div>
          

          <button type="submit" className="btn btn-primary w-100 mt-3" disabled={error !== ""}>
            Register User
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default CoachAdd;