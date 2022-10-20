import './App.css';
import Web3 from "web3"
import {useEffect, useState} from 'react'
import DrawAddress from './modules/DrawAddress';
import Avtorization from './modules/Avtorization';
import { abi } from './abi.js';

function App() {
  const contractAddress = "0xADE34354780968fF047E902c64EBa603702Eb64a";
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
      <Avtorization web3 = {web3} contract={contract}></Avtorization>
    </div>
  );
}

export default App;
