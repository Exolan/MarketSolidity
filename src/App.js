import './App.css';
import Web3 from "web3"
import {useEffect, useState} from 'react'
import DrawAddress from './modules/DrawAddress';

function App() {
  const [account, setAccount] = useState();
  const contractAddress = "0x11c6b396CfdF5233580cf3D4F950b9ae9Dd8E75d";

  async function network(){
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    setAccount(accounts[0])
    console.log(account);
  }
  network();

  // useEffect(()=>{
    
  // }, [])
  return (
    <div className="App">
      {/* <DrawAddress account={account}></DrawAddress> */}
    </div>
  );
}

export default App;
