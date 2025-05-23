import { useState } from "react";
import { useAuth } from "../login/AuthContext";
import { useData } from "../DataContext";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function UserAdd() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [selectedTeam, setSelectedTeam] = useState(1);

  const [error, setError] = useState("");

  const [firstName,    setFirstName]    = useState("");    

  const [surname,      setSurname]      = useState("");     

  const [nationality,  setNationality]  = useState("");  

  const [dob,          setDob]          = useState(""); 

  const [fideId,       setFideId]       = useState("");

  const [elo,          setElo]          = useState(""); 

  const [titleId,      setTitleId]      = useState("");      


  const {teams,fetchTeams,addPlayer}=useData()

  //get teams
  useEffect(()=>{
    fetchTeams()
  },[])

  if (!teams) {
    return <div>Loading...</div>; // Show loading screen
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

    let team=selectedTeam
    let date_of_birth=dob
    let fide_id=fideId
    let elo_rating=elo
    let title_id=titleId
    let name=firstName
    const userData = {
      username,
      password,
      name,
      surname,
      nationality,
      date_of_birth,
      team,
      fide_id,
      elo_rating,
      title_id,
    };

    const data = await addPlayer(userData);
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
            <div className="mb-2"><label className="fw-bold">Date of Birth</label>
              <input type="date" className="form-control" value={dob} onChange={e=>setDob(e.target.value)} />
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

            <div className="mb-2"><label className="fw-bold">FIDE ID</label>
              <input className="form-control" value={fideId} onChange={e=>setFideId(e.target.value)} />
            </div>
            <div className="mb-2"><label className="fw-bold">ELO Rating</label>
              <input type="number" className="form-control" value={elo} onChange={e=>setElo(e.target.value)} />
            </div>
            <div className="mb-2"><label className="fw-bold">Title ID</label>
              <input type="number" className="form-control" value={titleId} onChange={e=>setTitleId(e.target.value)} />
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

export default UserAdd;