
 
import './App.css';
import Homepage from './components/Homepage';
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import CreateTask from './components/CreateTask';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/task" element={<CreateTask/>}/>
      </Routes>

    </div>
  );
}

export default App;
