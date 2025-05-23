import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../DataContext";
import { useAuth } from "../login/AuthContext";
import Match from "./Match";

export const Coach = () => {

  const {fetchMatchsCoach,matchs}=useData()
  const{user}=useAuth()
  console.log(user)
  useEffect(() => {
    
    fetchMatchsCoach(user);
  }, []); 
  // [] means only once when component loads

  if (!matchs) {
    return <div>Loading...</div>; // Show loading screen
  }

    

  const matchs_data = matchs.map((props) => (
    <li key={props.match_id} className="list-unstyled">
      <Match {...props} />
    </li>
  ));

  return (
    
    <div className="position-relative min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
      <div className="container">
        <Link className="navbar-brand" to="/">Main menu</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/coach">Matches</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/halls">Halls</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <ul className="d-flex flex-wrap justify-content-center p-0 m-0">
        {matchs_data}
      </ul>

      <Link
        to="/createMatch"
        className="btn btn-primary position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Add Match
      </Link>
    </div>
  );
};

export default Coach;