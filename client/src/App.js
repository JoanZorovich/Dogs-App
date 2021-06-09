import React from "react";
import { Route} from 'react-router-dom'
import Landing from "./views/landing/landing"
import Navbar from "./components/navbar/navbar"
import Home from "./views/home/home"
import About from "./views/about/about"
import Create from "./views/create/create"
import Detail from "./views/detail/detail"
import Footer from "./components/footer/footer"
import Form from "./components/form/form"


import './App.css';


function App() {
  return (
    <>

      <Route exact path="/" component={Landing} />
      <Route path='/home' component={Navbar}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/home/about" component={About} />
              <Route exact path="/home/create" component={Create} />
              <Route exact path="/home/detail/:id" component={Detail}/>
              <Route exact path="/home/form" component={Form}/>
      <Route path='/home' component={Footer}/>
    </>
  
  );
}

export default App;
