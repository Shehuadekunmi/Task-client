import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AllTasks from './pages/Alltasks'
import Newtask from "./pages/Newtask";
import Edittask from './pages/Edittask'

function App() {
  return (
    <>
      <Router>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllTask" element={<AllTasks/>} />
            <Route path="/Newtask" element={<Newtask/>} />
            <Route path="/Edittask/:taskId" element={<Edittask/>} />
          </Routes>
       
      </Router>
    </>
  );
}

export default App;
