import "./Student.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export function Student() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const studentLogin = () => {
    const credentials = {
      email,
      password,
    };

    fetch("https://nodeurl.herokuapp.com/api/admin/studentlogin", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((details) => {
        if (details.message === "Login Successful") {
          navigate("/studentpage/" + details.email);
        } else {
          navigate("/error");
        }
      });
  };
  return (
    <div className="student">
      <div className="login-container">
        <RiTeamFill size="40px" color="darkslategrey" />
        <h3>Student Login</h3>
        <div className="login-credentials">
          <TextField
            value={email}
            onChange={(em) => setEmail(em.target.value)}
            id="standard-basic"
            label="Email Id"
            variant="standard"
          />
          <TextField
            value={password}
            onChange={(pass) => setPassword(pass.target.value)}
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
          <Button onClick={studentLogin} variant="outlined">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}