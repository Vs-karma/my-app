import React, { useState } from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1A1A1A';
      showAlert("You have enabled dark mode", "success")
      document.title = 'TextUtils-Dark Mode enabled';
      // setInterval(() => {
      //   document.title = 'Enable dark mode'
      // }, 1500);
      setTimeout(() => {
        document.title = 'TextUtils';
      }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("You have enabled light mode", "success")
      document.title = 'TextUtils-Light Mode enabled';
      setTimeout(() => {
        document.title = 'TextUtils';
      }, 2000);
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextTutils" aboutTxt="About/Help" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter the text to Analyze it" alert={alert} mode={mode} />}/>
          </Routes>
          {/* <TextForms showAlert={showAlert} heading="Enter the text to Analyze it" alert={alert} mode={mode} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
