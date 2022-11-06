import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import './RequestsAdmin.css'

function RequestsAdmin({contract}){
    const addressAccount = useSelector((state) => state.addressAccount)
    const [arrayReq, setArray] = useState([])
    const [status, setStatus] = useState(false)
    const [id, setId] = useState()

    useEffect(()=>{
        async function getRequests(){
            setArray(await contract.methods.viewRequests().call({from: addressAccount, gas: '9999999'}))
        }
        getRequests()
        setStatus(false)
        async function answerAdmin(){
            if(status){
                const answer = prompt("Ваш ответ (0 - нет, 1 - да)")
                await contract.methods.answerToRequest(id, answer).send({from: addressAccount, gas: '99999999'})
                setStatus(false)
            }
        }
        answerAdmin()
    }, [status])

    return (
        <div className="requests-admin">
            {arrayReq.map((req, index)=>{
                return(
                    <div key={index} className="request-admin">
                        <h3>Адрес: {req.requesting}</h3>
                        {req.haveRole == 1 ? <h3>Текущая роль: Продавец</h3> : <h3>Текущая роль: Покупатель</h3>}
                        {req.newRole == 1 ? <div><h3>Новая роль: Продавец</h3> <h3>Магазин: {req.id_shop}</h3> </div>: <h3>Новая роль: Покупатель</h3>}
                        {!req.isEnd ? <div><h3>Ожидание</h3> <button id={index} onClick={(e)=>{setId(e.target.id); setStatus(true)}}>Ответить</button></div> : req.isEnd & req.admin_answer == 1 ? <h3>Принято</h3> : req.isEnd & req.admin_answer == 0 ? <h3>Отклонено</h3> : null}
                    </div>
                )
            })}
        </div>
    )
}

export default RequestsAdmin