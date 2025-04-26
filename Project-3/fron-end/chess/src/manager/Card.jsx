import { useState } from "react";

const Card = (props) => {
  const { hall_id, hall_name, hall_country, hall_capacity } = props;
  const [newNameInput, setNewNameInput] = useState("");
  const [currentName, setCurrentName] = useState(hall_name);

  const handleInputChange = (e) => {
    setNewNameInput(e.target.value);
  };

  const handleRenameClick = () => {
    if (newNameInput.trim() !== "") {
      setCurrentName(newNameInput.trim());
      setNewNameInput(""); // clear input after renaming
    }
  };

  return (
    <div className="card shadow-sm m-3" style={{ width: "18rem" }}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{currentName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Hall ID: {hall_id}</h6>
        <p className="card-text mb-4">
          <strong>Country:</strong> {hall_country}
          <br />
          <strong>Capacity:</strong> {hall_capacity}
        </p>

        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter new hall name..."
          value={newNameInput}
          onChange={handleInputChange}
        />

        <button
          type="button"
          className="btn btn-outline-primary mt-auto"
          onClick={handleRenameClick}
          disabled={newNameInput.trim() === ""}
        >
          ✨ Rename Hall
        </button>
      </div>
    </div>
  );
};

export default Card;