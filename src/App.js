import './App.css';
import BasicExample2 from './component/Header2';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import IndividualIntervalsExample from './component/slideShow';
import Home from './component/Home';
import Header from './component/Header';
import Facebook from './component/Facebook';
import Cards from './component/Cards';



import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Overview from './component/Overview';
import Vision from './component/Vision';
import Awards from './component/Awards';
import Doctor1 from './component/Doctor1';
import Database from './component/Database';
import {useState} from 'react';
import axios from 'axios';
import Thankyou from './component/Thankyou';




const App=() => {
  

  
  return (
    
    
      <>
    
      
      <Header/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path="/facebook" element={<Facebook/>} />
       <Route path="/Overview" element={<Overview/>}/>
       <Route path="/Vision" element={<Vision/>}/>
       <Route path="/Awards" element={<Awards/>}/>
       <Route path="/Doctor1" element={<Doctor1/>}/>
       <Route path="/Database"  element={<Database/>}/>
       <Route path="/Thankyou" element={<Thankyou/>}/>
      </Routes>
      </>
     
      
      
  );
}

export default App;
