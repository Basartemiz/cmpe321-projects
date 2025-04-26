import { useState } from "react";
import { useAuth } from "../login/AuthContext";

function UserAdd() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("player"); // default value
  const [selectedTeam, setSelectedTeam] = useState("");
  const [error, setError] = useState("");

  const { sign_up } = useAuth();

  const teams = [
    "Eagles United",
    "Warrior Legends",
    "Phoenix Fire",
    "Thunderstorm FC",
    "Shadow Wolves",
    "Golden Dragons",
    "Crimson Knights",
    "Blue Titans",
    "Silver Hawks",
    "Iron Giants"
  ];

  // Example teams list (you said assume you have a list)
  

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
      email,
      password,
      type,
      team: type !== "arbiter" ? selectedTeam : null, // only attach team if arbiter
    };

    const status = await sign_up(userData);
    // Optionally handle success or error status here
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
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary bg-gradient">
      <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4 text-primary">Register User</h2>

        <form onSubmit={handleLogin}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label className="form-label fw-bold">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="mb-3">
            <label className="form-label fw-bold">Select Type</label>
            <select
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="arbiter">Arbiter</option>
              <option value="coach">Coach</option>
              <option value="player">Player</option>
            </select>
          </div>

          {type !== "arbiter" && (
            <div className="mb-3">
              <label className="form-label fw-bold">Select Team </label>
              <select
                className="form-select"
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
              >
                
                {teams.map((team, idx) => (
                  <option key={idx} value={team}>{team}</option>
                ))}
              </select>
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100 mt-3" disabled={error !== ""}>
            Register User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserAdd;