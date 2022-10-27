import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function ChangeRole({contract}){
    const account = useSelector((state) => state.account)
    const addressAccount = useSelector((state) => state.addressAccount)
    const [click, setClick] = useState(false)
    const [status, setStatus] = useState(false)
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

            for(const request of requests){
                if (request.requesting == addressAccount) {
                    setStatus(true)
                }
                else{
                    setStatus(false)
                }
            }

            if(click){
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
    }, [])

    return (
       <div>
            <h3>Подать заявку на смену роли до {role}</h3>
            {!status ? <button onClick={()=>{setClick(true)}}>Подать</button> : <h4>Подано</h4>}
        </div>
    )
}
export default ChangeRole