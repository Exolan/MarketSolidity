import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import "./Modals.css"

function clearInput(div){
    const inputs = div.querySelectorAll('input')
    for(const input of inputs){
        input.value = ''
    }
}

function Modals({web3, contract}){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [password, setPassword] = useState();
    const [isAvtorization, setAvtorization] = useState(true)
    const [isRegistration, setRegistration] = useState()
    const [clickReg, setClickReg] = useState()
    const [clickAvt, setClickAvt] = useState()
    const [nick, setNick] = useState();
    const addressAccount = useSelector((state) => state.addressAccount)
    const isShop = useSelector((state) => state.isShop)
    
    useEffect(()=>{
        if(web3){
            const reg = document.querySelector('.modal-registration')
            const avt = document.querySelector('.modal-avtorization')
            if(clickAvt === true){
                async function avtorization(avt){
                    const accounts = await web3.eth.getAccounts()
                    dispatch({type: "SET_ACCOUNTS", payload: accounts})
                    setClickAvt(false)
                    if(isShop == false){
                        await contract.methods.avtorization(addressAccount, await web3.utils.soliditySha3({type: 'string', value: password})).call({from: addressAccount, gas: "99999999"})
                        const account = await contract.methods.viewPerson(addressAccount).call({from: addressAccount, gas: "99999999"})
                        dispatch({type: "SET_ACCOUNT", payload: account})
                        avt.style.display = "none"
                        const balance = web3.utils.fromWei(await web3.eth.getBalance(addressAccount), "ether")
                        dispatch({type: "SET_BALANCE", payload: balance})
                        setAvtorization(false)
                        navigate('/profile/')
                    }
                    else{
                        console.log(isShop);
                        const enter = await contract.methods.avtorizationShop(addressAccount, await web3.utils.soliditySha3({type: 'string', value: password})).call({from: addressAccount, gas: "99999999"})
                        if(enter == true){
                            avt.style.display = "none"
                            const balance = web3.utils.fromWei(await web3.eth.getBalance(addressAccount), "ether")
                            dispatch({type: "SET_BALANCE", payload: balance})
                            setAvtorization(false)
                            navigate('/profile/')
                        }
                        else{
                            alert('Этого магазина не существует!')
                        }
                    }
                }
                avtorization(avt)
            }
            else if(clickReg === true){
                async function registration(reg, avt){
                    setClickReg(false)
                    await contract.methods.registration(nick, addressAccount, await web3.utils.soliditySha3({type: 'string', value: password})).send({from: addressAccount, gas: "99999999"})
                    avt.style.display = "grid"
                    reg.style.display = "none"
                    clearInput(reg)
                    setRegistration(false)
                    setAvtorization(true)
                }
                registration(reg, avt)
            }
            else if(isRegistration === true){
                async function drawReg(reg, avt){
                    avt.style.display = "none"
                    clearInput(avt)
                    reg.style.display = "grid"
                    setAvtorization(false)
                }
                drawReg(reg, avt)
            }
            else if(isAvtorization === true){
                async function drawAvt(reg, avt){
                    avt.style.display = "grid"
                    reg.style.display = "none"
                    clearInput(reg)
                    setRegistration(false)
                }
                drawAvt(reg, avt)
            }
        }
    }, [clickReg, clickAvt, isAvtorization, isRegistration])
    return(
        <div className="modals">
            <div className='modal-avtorization'>
                <h1>Авторизация</h1>
                <input className='input-login' type="text" placeholder='Введите логин' onChange={(e)=>{dispatch({type: "SET_ADDRESSACCOUNT", payload: e.target.value})}}/>
                <input type="text" placeholder='Введите пароль' onChange={(e)=>{setPassword(e.target.value)}}/>
                <div>
                    <p>Магазин</p>
                    <input type="checkbox" onClick={(e)=>{dispatch({type: 'SET_SHOP', payload: e.target.checked})}}/>
                </div>
                <button onClick={()=>{setClickAvt(true)}}>Войти</button>
                <button onClick={()=>{setRegistration(true)}}>Регистрация</button>
            </div>
            <div className="modal-registration">
                <h1>Регистрация</h1>
                <input className="input-nick" placeholder="Введите ник нейм" onChange={(e)=>{setNick(e.target.value)}}/>
                <input className='input-login' type="text" placeholder='Введите логин' onChange={(e)=>{dispatch({type: "SET_ADDRESSACCOUNT", payload: e.target.value})}}/>
                <input type="text" placeholder={'Введите пароль'} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button onClick={()=>{setClickReg(true)}}>Регистрация</button>
                <button onClick={()=>{setAvtorization(true); setRegistration(false)}}>Назад</button>
            </div>
        </div>
        
    )
}

export default Modals