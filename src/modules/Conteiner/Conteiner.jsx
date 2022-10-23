import { useSelector } from "react-redux"
import { Routes ,Route } from "react-router-dom"
import List from "../List"
import Profile from "../Profile/Profile"
import Shops from "../Shops"
import Users from "../Users"
import RequestsAdmin from '../RequestsAdmin'

function Conteiner({web3, contract}){
    const account = useSelector((state) => state.account)
    const arrayForAdmin = ['Магазины', 'Пользователи', 'Заявки']
    const arrayForWorker = []
    const arrayForUser = []
    let array

    if(account.role == 0){
        array = arrayForAdmin
    }
    else if(account.role == 1){
        array = arrayForWorker
    }
    else{
        array = arrayForUser
    }

    return(
        <div className="conteiner">
            <Profile web3={web3} contract={contract}/>
            <List array={array}/>
            <Routes>
                <Route path={'Магазины'} element={<Shops contract={contract}/>}></Route>
                <Route path={'Пользователи'} element={<Users contract={contract}/>}></Route>
                <Route path={'Заявки'} element={<RequestsAdmin contract={contract}/>}></Route>
                <Route></Route>
            </Routes>
        </div>
    )
}

export default Conteiner