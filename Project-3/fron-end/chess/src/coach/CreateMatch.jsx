import { useState } from "react";

function CreateMatch() {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [hallId, setHallId] = useState("");
  const [tableId, setTableId] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [arbiter, setArbiter] = useState("");

  // Mocked data (you can replace with real props later)
  const halls = [
    { id: "id1", name: "Hall 1" },
    { id: "id2", name: "Hall 2" },
  ];

  const teams = ["Team A", "Team B", "Team C", "Team D", "Team E"];
  const arbiters = ["arbiter_john", "arbiter_emily", "arbiter_mike", "arbiter_sarah"];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const matchData = {
      date,
      time_slot: timeSlot,
      hall_id: hallId,
      table_id: tableId,
      team1_id: team1,
      arbiter_username: arbiter,
    };

    console.log("Created Match:", matchData);

    // Here you can send matchData to backend API or context
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "500px" }}>
        <h2 className="text-center mb-4 text-primary">Create Match</h2>

        <form onSubmit={handleSubmit}>
          {/* Date */}
          <div className="mb-3">
            <label className="form-label fw-bold">Match Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* Time Slot */}
          <div className="mb-3">
            <label className="form-label fw-bold">Time Slot</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. 10:00 - 11:30"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              required
            />
          </div>

          {/* Hall Selection */}
          <div className="mb-3">
            <label className="form-label fw-bold">Hall</label>
            <select
              className="form-select"
              value={hallId}
              onChange={(e) => setHallId(e.target.value)}
              required
            >
              <option value="">Select Hall</option>
              {halls.map((hall) => (
                <option key={hall.id} value={hall.id}>
                  {hall.name}
                </option>
              ))}
            </select>
          </div>

          {/* Table ID */}
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

          {/* Team 1 */}
          <div className="mb-3">
            <label className="form-label fw-bold">Team 1</label>
            <select
              className="form-select"
              value={team1}
              onChange={(e) => setTeam1(e.target.value)}
              required
            >
              <option value="">Select Team 1</option>
              {teams.map((team, idx) => (
                <option key={idx} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>

          {/* Arbiter */}
          <div className="mb-3">
            <label className="form-label fw-bold">Select Arbiter</label>
            <select
              className="form-select"
              value={arbiter}
              onChange={(e) => setArbiter(e.target.value)}
              required
            >
              <option value="">Select Arbiter</option>
              {arbiters.map((arb, idx) => (
                <option key={idx} value={arb}>
                  {arb}
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