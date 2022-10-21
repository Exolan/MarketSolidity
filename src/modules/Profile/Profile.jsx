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

    useEffect(()=>{
        async function changeRole(){
            if(click){
                console.log(1);
                await contract.methods.changeRoleAdmin().call({from: addressAccount, gas: '99999999'})
                dispatch({type: 'SET_ACCOUNT', payload: await contract.methods.viewPerson(addressAccount).call({from: addressAccount, gas: '99999999'})})
                dispatch({type: 'SET_ACTIVEROLE', payload: account.activeRole})
            }
        }
        changeRole()
        setClick(false)
    }, [click])
    
    return (
        <div className="profile">
            <h1>Ваш адрес: {addressAccount}</h1>
            <h2>Ваш баланс: {useSelector((state) => state.balance)} eth</h2>
            <h3>Ваша роль: {useSelector((state) => state.role)}</h3>
            <h3>Активная роль: {useSelector((state) => state.activeRole)}</h3>
            <button onClick={()=>{setClick(true)}}>Сменить роль</button>
        </div>
    )
}

export default Profile