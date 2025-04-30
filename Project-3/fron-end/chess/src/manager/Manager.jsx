import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useData } from "../DataContext";
import Card from "./Card";


export const Manager = () => {

  const {halls,fetchHalls}=useData()

  useEffect(() => {
    fetchHalls();
  }, []); 
  

  if (!halls) {
    return <div>Loading...</div>; // Shows loading screen
  }


  const halls_data = halls.map((props) => (
    <li key={props.hall_id} className="list-unstyled">
      <Card {...props} />
    </li>
  ));

  return (
    <div className="position-relative min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
      <ul className="d-flex flex-wrap justify-content-center p-0 m-0">
        {halls_data}
      </ul>

      <Link
        to="/addUser"
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
        Add User
      </Link>
    </div>
  );
};

export default Manager;