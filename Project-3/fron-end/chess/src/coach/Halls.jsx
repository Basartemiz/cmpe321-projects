import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../DataContext";
import Hall from "./Hall";


export const Halls = () => {

  const {fetchHalls,halls}=useData()
  useEffect(() => {
    fetchHalls();
  }, []); 
  

  if (!halls) {
    return <div>Loading...</div>; 
  }

    

  const halls_data = halls.map((props) => (
    <li key={props.hall_id} className="list-unstyled">
      <Hall {...props} />
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
        {halls_data}
      </ul>

      
    </div>
  );
};

export default Halls;