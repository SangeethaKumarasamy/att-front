import "./App.css";
import { Home } from "./Home.js";
import { Route, Routes, Link } from "react-router-dom";
import { TeacherPage } from "./TeacherPage.js";
import { StudentPage } from "./StudentPage.js";
import { AdminPage } from "./AdminPage.js";
import { Error } from "./Error.js";

function App() {
  return (
    <div className="App">
      <div className="home-header">
        <Link to="/">
          <img
            className="aplogo"
            src="https://cdn-icons-png.flaticon.com/512/3589/3589030.png"
            alt=""
          />
        </Link>
        <span className="title">Attendance Management System</span>
      </div>
      <Routes>
        <Route exact path="/" element={ <Home/>}/>
        <Route path="/teacherpage"element={ <TeacherPage />}/>
        <Route path="/studentpage/:email" element={<StudentPage />}/>
        <Route path="/adminpage" element={<AdminPage />}/>
        <Route path="/error"element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;