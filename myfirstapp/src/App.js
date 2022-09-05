//import logo from './logo.svg';
import Login from './components/Login';
import Table from './components/Form';
//import Events from './components/Events';
//import Fruits from './components/reactjsx/Fruits';
//import Es6class from'./components/Es6class';
//import Render1 from './components/Render1';
//import University from './components/props1/university'
//import Ifcon from './components/condition/ifcon' ;
//import Logical from'./components/logical/logical';
//import Maplist from './components/list/maplist';
//import Form from'./components/form/form';
//import Router from './components/router/router';
//import Car from './components/Car';
//import Example from './components/ex';
//import Color from './components/state/color';
//import Timer from './components/usestate/timer';
//import Employe from './components/ex';
//import Agri from './Test/ex1';
//import RadioButtonsGroup from './muicomponents/auto';
//import ErrorRadios from './muicomponents/checkbox';
//import HoverRating from './muicomponents/rating';
//import DescriptionAlerts from './muicomponents/alert';
//import InputSlider from './muicomponents/slider';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Myform from './components/form/form';
import Home from './components/Home';
import Notfound from './content/notfound';

import Fruits from './content/string';
import Myfunction from './content/array';
function App() {
  return (
    <div className="App">
      <h1>This is react</h1>

      {/*<Login />
    <Table />
    <Events/>
    <Fruits/>
    <University/>
  
  <Ifcon isGoal={true}/>
  <Ifcon isGoal={false}/>
  <Logical/>
  <Router/><hr></hr>

  <Example />
  <Color/>
     <Timer></Timer>
     <Employe/>
    <Agri/>
    <RadioButtonsGroup/>
<ErrorRadios/>
<HoverRating/>
<DescriptionAlerts/>
<InputSlider/>
  */}


      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/table" element={<Table />} />
            <Route path='/form' element={<Myform/>}/>
            <Route component={Notfound} />
          
          
          </Route>
        </Routes>
      </BrowserRouter>
<Fruits/><br/>
<Myfunction/>
    </div>


  );
}

export default App;
