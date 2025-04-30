
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Alert_Component from "./Alert"

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { login } = useAuth();

  const navigate=useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault();

    const type = await login(username,password);
    console.log(type)
    if(type==="coach"){
      navigate("/coach")
    }
    else if(type==="manager"){
      navigate("/managerPage")
    }
    else if(type==="arbiter"){
      navigate("/arbiter")
    }
    else if(type==="player"){
      navigate("/player")
    }
    else{
      setMessage("User not Found")
      setTimeout(()=>{setMessage("")},3000)
    }

    
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary bg-gradient">
      <div className="card p-4 shadow-lg" style={{ width: "100%", maxWidth: "400px" }}>

        <h2 className="text-center mb-4 text-primary">Welcome Back</h2>

        <form onSubmit={handleLogin}>
        <Alert_Component message={message}>
        </Alert_Component>

          <div className="mb-3">
            <label className="form-label fw-bold">username</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default LoginPage;