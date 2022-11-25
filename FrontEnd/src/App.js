import "./App.css";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import CreateTask from "./components/CreateTask";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/homepage"
          element={<PrivateRoute>{<Homepage />}</PrivateRoute>}
        />
        <Route path="/task" element={<CreateTask />} />
      </Routes>
      {/* <NavBar/>
      <RightSlider/> */}
    </div>
  );
}

export default App;
