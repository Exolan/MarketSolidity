import { useState, useEffect } from "react"

import "./Modals.css"

function Modals({web3, contract}){
    const [balance, setBalance] = useState();
    const [accounts, setAccounts] = useState([]);
    const [account, setAccount] = useState();
    const [password, setPassword] = useState();
    const [isAvtorization, setAvtorization] = useState()
    const [isRegistration, setRegistration] = useState()
    const [nick, setNick] = useState();

    useEffect(()=>{
        if(web3){
            if(isAvtorization === true){
                async function avtorization(){
                    console.log(isAvtorization, isRegistration);
                    const accounts = await web3.eth.getAccounts()
                    const balance = web3.utils.fromWei(await web3.eth.getBalance(account), "ether")
                    setAccounts(accounts)
                    setBalance(balance)
                    await contract.methods.avtorization(account, await web3.utils.soliditySha3({type: 'string', value: password})).call({from: account, gas: "1999999999999999"})
                    const avtorization = document.querySelector('.modal-avtorization')
                    avtorization.style.display = "none"
                }
                avtorization()
            }
            else if(isAvtorization === false){
                async function drawReg(){
                    console.log(isAvtorization, isRegistration);
                    const reg = document.querySelector('.modal-registration')
                    const avt = document.querySelector('.modal-avtorization')
                    avt.style.display = "none"
                    reg.style.display = "flex"
                }
                drawReg()
            }
            else if(isRegistration === true){
                async function registration(){
                    console.log(isAvtorization, isRegistration);
                    await contract.methods.registration(nick, account, await web3.utils.soliditySha3({type: 'string', value: password})).call({from: account, gas: "1999999999999999"})
                    const reg = document.querySelector('.modal-registration')
                    const avt = document.querySelector('.modal-avtorization')
                    avt.style.display = "flex"
                    reg.style.display = "none"
                    isRegistration = false
                }
                registration()
            }
            else if(isRegistration === false){
                async function drawAvt(){
                    console.log(isAvtorization, isRegistration);
                    const reg = document.querySelector('.modal-registration')
                    const avt = document.querySelector('.modal-avtorization')
                    avt.style.display = "flex"
                    reg.style.display = "none"
                }
                drawAvt()
            }
        }
    }, [isAvtorization, isRegistration])
    return(
        <div className="modals">
            <div className='modal-avtorization'>
                <input className='input-login' type="text" placeholder='Введите логин' onChange={(e)=>{setAccount(e.target.value)}}/>
                <input type="text" placeholder='Введите пароль' onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={()=>{setAvtorization(true)}}>Войти</button>
                <button onClick={()=>{setAvtorization(false)}}>Регистрация</button>
            </div>
            <div className="modal-registration">
                <input className="input-nick" placeholder="Введите ник нейм" onChange={(e)=>{setNick(e.target.value)}}/>
                <input className='input-login' type="text" placeholder='Введите логин' onChange={(e)=>{setAccount(e.target.value)}}/>
                <input type="text" placeholder={'Введите пароль'} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={()=>{setRegistration(true)}}>Регистрация</button>
                <button onClick={()=>{setRegistration(false)}}>Назад</button>
            </div>
        </div>
        
    )
}

export default Modals