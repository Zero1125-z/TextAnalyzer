import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import NavigationBar from './Components/NavigationBar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        typ: type
      })
      setTimeout(()=>{
        setAlert(null);
      },2500)
  }

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode enabled", "success");
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
   <NavigationBar title = "Text AnalyzZer" mode={mode} about = "About Us" toggleMode = {toggleMode}/>

    <Alert alert = {alert}/>

   {/* <NavigationBar/> */}
    <div className="container my-3">
    {/* <Routes>
            <Route exact path="/about" element={<About />}>
          </Route>
          
            <Route exact path="/"
              element={ */}
      <TextForm showAlert={showAlert} heading = "Enter Text HERE " mode ={mode}/>     
      {/* </Route>    
      </Routes>      */}
      </div>      
    {/* </BrowserRouter> */}
  
    </>
    );
}

export default App;
