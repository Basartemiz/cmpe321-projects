import { useState } from "react";
import { useData } from "../DataContext";


const Card = (props) => {
  const { hall_id, hall_name, country, capacity } = props;
  const [newNameInput, setNewNameInput] = useState("");
  const [currentName, setCurrentName] = useState(hall_name);

  const {renameHall}=useData()

  const handleInputChange = (e) => {
    setNewNameInput(e.target.value);
  };

  const handleRenameClick =async () => {
    const data=await renameHall({
      "hall_name":newNameInput,
      "hall_id":hall_id,
    })
    if(data.status=="ok"){
      if (newNameInput.trim() !== "") {
        setCurrentName(newNameInput);
        setNewNameInput(""); 
        
      }
      else{
        console.log(data.status+":status")
      }
    
   }
  };

  return (
    <div className="card shadow-sm m-3" style={{ width: "18rem" }}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{currentName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Hall ID: {hall_id}</h6>
        <p className="card-text mb-4">
          <strong>Country:</strong> {country}
          <br />
          <strong>Capacity:</strong> {capacity}
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
           Rename Hall
        </button>
      </div>
    </div>
  );
};

export default Card;