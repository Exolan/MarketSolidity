import { useSelector } from "react-redux"
import { Routes ,Route } from "react-router-dom"
import List from "../List"
import Profile from "../Profile/Profile"
import Shops from "../Shops"
import Users from "../Users"
import RequestsAdmin from '../RequestsAdmin'
import ChangeRole from "../ChangeRole"

function Conteiner({web3, contract}){
    const account = useSelector((state) => state.account)
    const arrayForAdmin = ['Магазины', 'Пользователи', 'Заявки']
    const arrayForUaW = ['Магазины', 'Роль']
    const isShop = useSelector((state) => state.isShop)
    let array

    if(account.role == 0){
        array = arrayForAdmin
    }
    else if(isShop == false){
        array = arrayForUaW
    }

    return(
        <div className="conteiner">
            <Profile web3={web3} contract={contract}/>
            {isShop == false ? <List array={array}/> : null}
            <Routes>
                <Route path={'Магазины'} element={<Shops web3={web3} contract={contract}/>}></Route>
                <Route path={'Пользователи'} element={<Users contract={contract}/>}></Route>
                <Route path={'Заявки'} element={<RequestsAdmin contract={contract}/>}></Route>
                <Route path={'Роль'} element={<ChangeRole contract={contract}/>}></Route>
                <Route path={'История'}></Route>
            </Routes>
        </div>
    )
}

export default Conteiner