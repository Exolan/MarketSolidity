import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import './ChangeRole.css'

function ChangeRole({contract}){
    const account = useSelector((state) => state.account)
    const addressAccount = useSelector((state) => state.addressAccount)
    const [click, setClick] = useState(false)
    const [status, setStatus] = useState()
    let role

    if(account.role == 1){
        role = 'покупателя'
    }
    else{
        role = 'продавца'
    }

    useEffect(()=>{ 
        async function request(){
            const requests = await contract.methods.viewRequests().call({from: addressAccount, gas: '9999999'})
            requests.map((request)=>{
                if(request.requesting == addressAccount & request.isEnd == false){
                    setStatus(true)
                }
            })
            if(click){
                setStatus(true)
                setClick(false)
                if(account.role == 2){
                    const id_shop = prompt('Введите id магазина')
                    await contract.methods.requestToChangeRole(id_shop).send({from: addressAccount, gas: '9999999'})
                }
                else{
                    await contract.methods.requestToChangeRole(0).send({from: addressAccount, gas: '9999999'})
                }
            }
            
        }
        request()
    }, [click])

    return (
       <div className="review-user">
            <div>
                <h3>Подать заявку на смену роли до {role}</h3>
                {status == false || status == undefined? <button onClick={()=>{setClick(true)}}>Подать</button> : <h4>Подано</h4>}
            </div>
        </div>
    )
}
export default ChangeRole