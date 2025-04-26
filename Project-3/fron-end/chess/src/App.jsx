import { useState } from 'react'
import './App.css'
import AuthProvider from './login/AuthContext'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './login/LoginPage';
import { Manager } from './manager/Manager';
import UserAdd from './manager/Useradd';
import Coach from './coach/Coach';
import CreateMatch from './coach/CreateMatch';
import Arbiter from './arbiter/Arbiter';
import Player from './player/Player';

function App() {
  
  return (

    //for login
    <AuthProvider>

      
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<LoginPage></LoginPage>}></Route>
          <Route path='/managerPage' element={<Manager></Manager>}></Route>
          <Route path='/addUser' element={<UserAdd></UserAdd>}></Route>
          <Route path='/coach' element={<Coach></Coach>}></Route>
          <Route path='/createMatch' element={<CreateMatch></CreateMatch>}></Route>
          <Route path='/arbiter' element={<Arbiter></Arbiter>}></Route>
          <Route path='/player' element={<Player></Player>}></Route>
          

        </Routes>
      
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
