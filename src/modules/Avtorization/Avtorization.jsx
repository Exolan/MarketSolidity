import { useState, useEffect } from "react";

function Avtorization({web3, contract}){
    const [balance, setBalance] = useState();
    const [accounts, setAccounts] = useState([]);
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    const [click, setClick] = useState(false)

    useEffect(()=>{
        if(web3){
            async function drawProfile(){
                const accounts = await web3.eth.getAccounts()
                const balance = web3.utils.fromWei(await web3.eth.getBalance(account), "ether")
                setAccounts(accounts)
                setBalance(balance)
                await contract.methods.avtorization(account, await web3.utils.soliditySha3({type: 'string', value: password})).call({gas: "99999999"})
                const avtorization = document.querySelector('.modal-avtorization')
                avtorization.style.display = "none"
            }
            drawProfile()
        }
    }, [click])
    return(
        <div className={'modal-avtorization'}>
            <input className={'input-login'} type="text" placeholder={'Введите логин'} onChange={(e)=>{setAccount(e.target.value)}}/>
            <input type="text" placeholder={'Введите пароль'} onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={()=>{setClick(true)}}>Войти</button>
        </div>
    )
}

export default Avtorization