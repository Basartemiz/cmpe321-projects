import { useState } from "react";

const Hall = (props) => {
  const { hall_id, hall_name, country, capacity } = props;
  
  return (
    <div className="card shadow-sm m-3" style={{ width: "18rem" }}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{hall_name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Hall ID: {hall_id}</h6>
        <p className="card-text mb-4">
          <strong>Country:</strong> {country}
          <br />
          <strong>Capacity:</strong> {capacity}
        </p>

      </div>
    </div>
  );
};

export default Hall;