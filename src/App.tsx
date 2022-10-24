import React from 'react';
import { useRecoilValue } from 'recoil';
import './App.css';
import Alerts from './components/Alerts';
import Login from './components/Login';
import Main from './components/Main';
import { userName } from './State/atoms';

function App() {
  const Username = useRecoilValue(userName)

  return (
    <>
    <Main />
    {
      Boolean(!Username) && <Login />
    }
    <Alerts />
    </>
  );

}

export default App;
