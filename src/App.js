

import './App.css';
import Navbar from './componets/Navbar';
import About from './componets/About';
import TextForm from './componets/TextForm';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light');
//   const[alert,setAlert] = useState(null);
//   const showAlert = (message,type)=>{
// setAlert({
//   msg:message,
//   type:type,

// })

//   }
   const toggleMode = () => {

   if(mode === 'light'){
     setMode ('dark');
     document.body.style.backgroundColor='#042743';
  //     showAlert("Dark mode has been enbled","succcess");
    }
   else{
       setMode  ('light');
       document.body.style.backgroundColor='white';
  //     showAlert("light mode has been enbled","succcess");
     }

   }
  return (
    <>
  <BrowserRouter>
      
<Navbar title="navbar" mode ={mode} toggleMode={toggleMode}/>
{/* <Alert alert = {alert}/> */}

<div className="container my-4">
<Routes>
<Route path="/TextForm" element={<TextForm heading="ENTER THE TEXT" mode={mode} />}>

</Route>
<Route path="/About" element={<About mode={mode}/>}></Route>
</Routes>  
</div>
      
      </BrowserRouter>
    </>
  );
}

export default App;
