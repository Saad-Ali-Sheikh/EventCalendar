import React,{useState} from 'react';
import './App.css';
import SignIn from './Components/SignIn/SignIn.js';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
//import Particles from './Components/Particles/Particles';


function App() {
  let [route,Setroute]=useState('Signin');
  const OnrouteChange=(Route)=>
  {
    route=Route;
    Setroute(route);
  }
  return (
    <div> 
    { route==='Signin'? <SignIn OnrouteChange={OnrouteChange}/> :
        route ==='Register'?<Register OnrouteChange={OnrouteChange}/>:
        <Home/>}
    </div>
    
    
 
  );
}

export default App;
