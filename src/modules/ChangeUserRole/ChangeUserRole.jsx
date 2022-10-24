async function ChangeUserRole(user, contract, addressAccount){
    const newRole = prompt("Введите новую роль")
    let idShop
    if(newRole == '1'){
        idShop = prompt("Введите магазин")
    }
    else{
        idShop = 0
    }
    await contract.methods.changeUserRole(user.login, newRole, idShop).send({from: addressAccount, gas:"999999"})
}

export default ChangeUserRole