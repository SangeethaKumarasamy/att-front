import "./Teacher.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { GiTeacher } from "react-icons/gi";

export function Teacher() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const teacherLogin = () => {
    const credentials = {
      email,
      password,
    };

    fetch("https://nodeurl.herokuapp.com/api/admin/teacherlogin", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((details) => {
        if (details.message === "Login Successful") {
          navigate("/teacherpage");
        } else {
          navigate("/error");
        }
      });
  };
  return (
    <div className="teacher">
      <div className="login-container">
        <GiTeacher size="40px" color="darkslategrey" />
        <h3>Teacher Login</h3>
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
          <Button onClick={teacherLogin} variant="outlined">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}