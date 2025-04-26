import { Link } from "react-router-dom";
import Card from "./Card";

export const Manager = () => {
  const data = [
    {
      hall_id: "id1",
      hall_name: "hall1",
      hall_country: "country",
      hall_capacity: 10,
    },
    {
      hall_id: "id2",
      hall_name: "hall2",
      hall_country: "country2",
      hall_capacity: 20,
    },
    // you can add more halls here
  ];

  const halls = data.map((props) => (
    <li key={props.hall_id} className="list-unstyled">
      <Card {...props} />
    </li>
  ));

  return (
    <div className="position-relative min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
      <ul className="d-flex flex-wrap justify-content-center p-0 m-0">
        {halls}
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