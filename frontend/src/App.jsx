import "./App.css"
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {

  return (
      <>
        <Navbar/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </>
  )
}

export default App
