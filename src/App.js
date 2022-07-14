// import logo from './logo.svg';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')
  const [togglename, setToggle] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      showAlert('Dark mode activated', 'success')
      setToggle('Enable Light Mode')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      showAlert('Light mode activated', 'success')
      setToggle('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" navclasshome="nav-link active" navclassabout="nav-link" navhome="Home" navabout="About us" mode={mode} toggleMode={toggleMode} toggle={togglename} />
        <Alert alert={alert} />
        <div className="container">

              <Routes>

              {/* <Route path="/about" element={<About mode={mode}/>} /> */}
              <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />

            </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
