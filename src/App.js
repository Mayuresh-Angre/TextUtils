import { useState } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import TextUtis from './textUtis/TextUtis';
import Alert from './textUtis/Alert';
import Demo from './textUtis/demo'
import About from './textUtis/About';

function App() {
  const [mode,setMode]=useState("light")
  const toggleMode=()=>{
    if(mode==='light'){
      setMode("Dark")
      document.body.style.backgroundColor='grey'
      showAlert('Dark mode is on...', 'success')
    }else{
      document.body.style.backgroundColor='white'
      setMode("light")
      showAlert('Dark mode is off','success')
    }
  }
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }




  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} showAlert={showAlert} mode={mode}/>
            {/* <About /> */}
          <TextUtis mode={mode} alert={alert} showAlert={showAlert}/>
      {/* <Demo/> */}
    </>
  );
}

export default App;
