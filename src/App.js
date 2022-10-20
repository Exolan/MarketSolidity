import './App.css';
import Web3 from "web3"
import {useEffect, useState} from 'react'
import DrawAddress from './modules/DrawAddress';
import Modals from './modules/Modals'

import { abi } from './abi.js';

function App() {
  const contractAddress = "0x3159d1552e940C03BFE82F72BFB1131749995Fb5";
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
      {/* <DrawAddress setAccount={setAccount} account={account} balance={balance} accounts={accounts}></DrawAddress> */}
      <Modals web3={web3} contract={contract}/>
    </div>
  );
}

export default App;
