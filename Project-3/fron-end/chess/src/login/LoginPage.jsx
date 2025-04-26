import { useState } from "react";
import { useAuth } from "./AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.");
      setPassword("")
      setTimeout(()=>{setError("")},3000)
      return;
    } else {
      setError("");
    }

    const status = await login({ email, password });
    // Optionally handle the status (success or error) here
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
        <h2 className="text-center mb-4 text-primary">Welcome Back</h2>

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

          <button type="submit" className="btn btn-primary w-100 mt-3" disabled={error !== ""}>
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">Forgot your password?</small>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;