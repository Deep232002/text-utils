import React, { useState } from "react";
import "./App2.css";
import Alert from "./component/Alert";
// import About from "./component/About"
import Navbar from "./component/Navbar";
// import Body from './component/Body';
import Txt from "./component/Txt";
// import { BrowserRouter as Router, Route ,Switch,Link} from "react-router-dom";
// import Switch from 'react-js-switch';
// import { Route } from "react-router";
function App() {
  const [mode, setMode] = useState("light");

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  // const removeclasses=()=>{ 
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-white')
  //   document.body.classList.remove('bg-primary')
  // }
  // const togglemode=(cls)=>{
  //   removeclasses();
   
  //   document.body.classList.add('bg-'+cls);
  //   if(cls==='light'){
  //     setMode('light')
  //     // document.body.style.backgroundColor='#042743'
  //     showalert('dark mode has been enable','success ')
  //   }else{
  //     setMode('dark')
  //   }
  //   // else{
  //   //   setMode('light')
  //   //   // document.body.style.backgroundColor='white'
  //   //   showalert('light mode has been enable','success ')

  //   // }
  // }
  
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showalert('dark mode has been enable','success ')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert('light mode has been enable','success ')

    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
     
       {/* <Switch>
        <Route path="/about"> */}
          {/* <About mode={mode}/> */}
        {/* </Route> 

         <Route path="/"> */}
          
          
            <Txt
              showalert={showalert}
              name="deepak"
              id="name"
              heading="Enter the text to utilize here"
              mode={mode} 
            />
{/*         
        </Route>
      </Switch> 
 
      </Router> */}
    </>
  );
}

export default App;
