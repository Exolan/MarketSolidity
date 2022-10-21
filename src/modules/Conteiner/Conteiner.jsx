import { useDispatch, useSelector } from "react-redux"
import List from "../List"
import Profile from "../Profile/Profile"

function Conteiner({web3, contract}){
    const dispatch = useDispatch()
    const account = useSelector((state) => state.account)
    const arrayForAdmin = ['Магазины', 'Пользователи', 'Добавить магазин', 'Заявки пользователей']
    const arrayForWorker = []
    const arrayForUser = []
    let role
    let activeRole
    let array

    if(account.role == 0){
        role = "Админ"
    }
    else if(account.role == 1){
        role = "Продавец"
    }
    else{
        role = "Покупатель"
    }

    if(account.activeRole == 0){
        activeRole = "Админ"
        array = arrayForAdmin
    }
    else if(account.activeRole == 1){
        activeRole = "Продавец"
    }
    else{
        activeRole = "Покупатель"
    }

    dispatch({type: 'SET_ACTIVEROLE', payload: activeRole})
    dispatch({type: 'SET_ROLES', payload: role})

    return(
        <div className="conteiner">
            <Profile web3={web3} contract={contract}/>
            <List array={array}/>
        </div>
    )
}

export default Conteiner