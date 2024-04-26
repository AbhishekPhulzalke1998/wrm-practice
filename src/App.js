import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
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
import NoPage from './form/NoPage';
import CurdUI from './curd/CurdUI';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    {/* <Firstcom />
    <Header name="Sumit" />
    <Header name="sumit@gmail.com" />
    <StateCom />
    <UseState />
    <UseEffectHook />
    <UseRefHook />
    <AxiosGet />
    <AxiosPost /> */}
     {/* <Login /> */}
   
    {/* <PartsTable />  */}


    <Route index element={<Login />}/>
    <Route path='/Login' element={<Login />}/>
    <Route path='/Parts' element={<PartsFetch />}/>
    <Route path='/curd' element={<CurdUI />}/>
    <Route path='*' element={<NoPage />}/>
    </Routes>
    </BrowserRouter>
    
    </>
   
  );
}

export default App;
