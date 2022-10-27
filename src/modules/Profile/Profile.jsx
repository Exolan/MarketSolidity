import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState} from "react"

import "./Profile.css"

function Profile({web3, contract}){
    const dispatch = useDispatch()
    const account = useSelector((state) => state.account)
    const accounts = useSelector((state) => state.accounts)
    const addressAccount = useSelector((state) => state.addressAccount)
    const [click, setClick] = useState(false)
    const isShop = useSelector((state) => state.isShop)
    let role
    let activeRole
    if(isShop == false){
        if(account.role == 0){
            role = "Админ"
        }
        else if(account.role == 1){
            role = "Продавец"
        }
        else if(account.role == 2){
            role = "Покупатель"
        }
        if(account.activeRole == 0){
            activeRole = "Админ"
        }
        else if(account.activeRole == 1){
            activeRole = "Продавец"
        }
        else if(account.activeRole == 2){
            activeRole = "Покупатель"
        }
    }
    else{
        role = 'Магазин'
        activeRole = "Магазин"
    }
    dispatch({type: 'SET_ROLE', payload: role})
    dispatch({type: 'SET_ACTIVEROLE', payload: activeRole})

    useEffect(()=>{
        async function changeRole(){
            if(click){
                if(account.role == 1){
                    await contract.methods.changeRoleWorker().send({from: addressAccount, gas: '99999999'})
                    const account = await contract.methods.viewPerson(addressAccount).call({from: addressAccount, gas: '99999999'})
                    dispatch({type: 'SET_ACCOUNT', payload: account})
                    dispatch({type: 'SET_ACTIVEROLE', payload: account.activeRole})
                }
                else{
                    await contract.methods.changeRoleAdmin().send({from: addressAccount, gas: '99999999'})
                    const account = await contract.methods.viewPerson(addressAccount).call({from: addressAccount, gas: '99999999'})
                    dispatch({type: 'SET_ACCOUNT', payload: account})
                    dispatch({type: 'SET_ACTIVEROLE', payload: account.activeRole})
                }
            }
            setClick(false)
        }
        changeRole()
    }, [click])
    
    return (
        <div className="profile">
            <h1>Ваш адрес: {addressAccount}</h1>
            <h2>Ваш баланс: {useSelector((state) => state.balance)} eth</h2>
            <h3>Ваша роль: {useSelector((state) => state.role)}</h3>
            <h3>Активная роль: {useSelector((state) => state.activeRole)}</h3>
            {account.role != 2 ? <button onClick={()=>{setClick(true)}}>Сменить роль</button> : null}
        </div>
    )
}

export default Profile