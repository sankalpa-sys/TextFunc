
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState("light")

  const toggleMode = () => {
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "black"
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }
  return (
    <Router>
    <div>
    <Navbar title="TextFunc" about= "About us" mode ={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>

        <Routes>
          <Route  exact path="/about">
            <About mode = {mode} />
          </Route>
          <Route exact path="/">
          <div className="container my-4"><h2><TextForm heading="Enter Your Text Here.." showAlert = {showAlert} mode = { mode}/></h2></div>
          </Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
