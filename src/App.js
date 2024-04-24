
import React from 'react';
import './App.css';
import Firstcom from './newcom/Firstcom';
import Header from './newcom/Header';
import StateCom from './newcom/StateCom';
import UseState from './newcom/UseState';
import UseEffectHook from './newcom/UseEffectHook';
import UseRefHook from './newcom/UseRefHook';
import AxiosGet from './services/AxiosGet';
import AxiosPost from './services/AxiosPost';
import Login from './form/Login';
import PartsFetch from './form/itemtypedata/PartsFetch';
import PartsTable from './form/itemtypedata/PartsTable';

function App() {
  return (
    <>
    {/* <Firstcom />
    <Header name="Sumit" />
    <Header name="sumit@gmail.com" />
    <StateCom />
    <UseState />
    <UseEffectHook />
    <UseRefHook />
    <AxiosGet />
    <AxiosPost /> */}
    <Login />
    <PartsFetch />
<PartsTable />
    </>
  );
}

export default App;
