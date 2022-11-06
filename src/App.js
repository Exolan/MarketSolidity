import './App.css';
import Web3 from "web3"
import {useEffect, useState} from 'react'
import { abi } from './abi.js';
import Conteiner from './modules/Conteiner';
import Modals from './modules/Modals'
import { Route, Routes } from 'react-router';

function App() {
  const contractAddress = "0x8b211511422391AF3950660a59B3909856b3F6B4";
  const [web3, setWeb3] = useState()
  const [contract, setContract] = useState()
  useEffect(()=>{
    async function network(){
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const contract = new web3.eth.Contract(abi, contractAddress)
      setWeb3(web3)
      setContract(contract)
    }
    network();
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Modals web3={web3} contract={contract}/>}/>
        <Route path='/profile/*' element={<Conteiner web3 = {web3} contract = {contract}/>}/>
      </Routes>
    </div>
  );
}

export default App;
