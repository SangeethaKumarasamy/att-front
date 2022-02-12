import "./Home.css";
import { Teacher } from "./Teacher.js";
import { Student } from "./Student.js";
import { Admin } from "./Admin.js";

export function Home() {
  return (
    <div className="home">
      <img
        className="mainImg"
        src="https://peoplechoice.co.in/wp-content/uploads/2021/05/Attendance-Management-System.jpg"
        alt=""
      />
      <div className="loginContainer">
        <Teacher />
        <Student />
        <Admin />
      </div>
    </div>
  );
}