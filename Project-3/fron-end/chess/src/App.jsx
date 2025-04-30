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
import DataContext from './DataContext';
import Halls from './coach/Halls';
import CoachAdd from './manager/CoachAdd';
import ArbiterAdd from './manager/ArbiterAdd';

function App() {
  
  return (
    //fetch API
    <DataContext>

    <AuthProvider>

      
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<LoginPage></LoginPage>}></Route>
          <Route path='/managerPage' element={<Manager></Manager>}></Route>

          <Route path='/addUser' element={<UserAdd></UserAdd>}></Route>
          <Route path='/addCoach' element={<CoachAdd></CoachAdd>}></Route>
          <Route path='/addArbiter' element={<ArbiterAdd></ArbiterAdd>}></Route>

          <Route path='/coach' element={<Coach></Coach>}></Route>
          <Route path='/createMatch' element={<CreateMatch></CreateMatch>}></Route>
          <Route path='/arbiter' element={<Arbiter></Arbiter>}></Route>
          <Route path='/player' element={<Player></Player>}></Route>
          <Route path='/halls' element={<Halls></Halls>}></Route>
          

        </Routes>
      
      </BrowserRouter>
    </AuthProvider>
    </DataContext>
  )
}

export default App
