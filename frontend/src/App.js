import React from 'react';
import logo from './assets/img/logo.png'
import Login from './pages/LoginPage'
import Register from './pages/RegisterPage'
import Main from './pages/MainPage'
import Pacient from './pages/PacientPage'
import Professional from './pages/ProfessionalPage'
import Unity from './pages/UnityPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" exact={true} component={Main}></Route>
          <Route path="/" exact={true} component={Login}></Route>
          <Route path="/professional" exact={true} component={Professional}></Route>
          <Route path="/pacient" exact={true} component={Pacient}></Route>
          <Route path="/unity" exact={true} component={Unity}></Route>
          <Route path="/register" exact={true} component={Register}></Route>
        </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;