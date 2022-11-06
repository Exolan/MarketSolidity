import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ChangeUserRole from "../ChangeUserRole";

import './Users.css'

function Users({contract}) {
    const addressAccount = useSelector((state)=>state.addressAccount)
    const accounts = useSelector((state)=>state.accounts)
    const [users, setUsers] = useState([])

    useEffect(()=>{
        async function ChangeUsers(){
            const users = []
            for(const acc of accounts){
                const person = await contract.methods.viewPerson(acc).call()
                if(person.login == acc){
                    users.push(person)
                }
            }
            setUsers(users)
        }
        ChangeUsers()
    }, [users])

    return (
        <div className="users">
            {users.map((user, index)=>{
                if(user.login == addressAccount){
                    return null
                }
                return(
                    <div key={index} className="user">
                        <p>Имя: {user.name}</p>
                        <p>Адрес: {user.login}</p>
                        <p>Роль: {user.role}</p>
                        {user.role != 0 ? <button onClick={()=>{ChangeUserRole(user, contract, addressAccount); setUsers([])}}>Изменить роль</button> : null}
                    </div>
                )
            })}   
        </div>
    )
}

export default Users