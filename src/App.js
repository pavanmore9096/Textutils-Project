
import  { useState } from 'react';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
 import TextFrom from './Component/TextForm';
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";




 // toggleMode={toggleMode}/>
function App() {

  const[alert, setAlert] = useState(null);
  
  const showAlert = (message, type) =>{
     setAlert(
      {
        msg: message,
        type: type
      }
     )
     setTimeout(()=>{
     setAlert(null)
     },2000)
  }
  
  const [Mode,setMode]= useState('light');
  const toggleMode = ()=>{
    
      if(Mode === 'light'){
        setMode('dark');
         document.body.style.backgroundColor= '#06385f';
        showAlert("Dark mode is enabled","success")
      }
      else{
        setMode('light');
         document.body.style.backgroundColor= 'white';
        showAlert("Light mode is enabled","success")
      }
 }
  return (
    <>
     <Router>
      <Navbar  title="Textutils" About="About Textutils" Mode={Mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <div className="container  my-3" >
      <Routes>
          <Route exact path="/About" element= {<About Mode={Mode} />}>
           
          </Route>
          <Route exact path="/" element={<TextFrom  heading="Enter Your Text Here" Mode={Mode} showAlert={showAlert}/>  }>
          
          
            
          </Route>
        </Routes>  
      
      </div>
      </Router>
    </>

  );
}



export default App;
