async function AddShop(web3, contract, addressAccount){
    const addressShop = prompt('Введите адрес')
    const passwordShop = prompt('Введите пароль')
    let password
    if(passwordShop == ''){
        alert('Вы не ввели пароль!')
    }
    else{
        password = await web3.utils.soliditySha3({type: 'string', value: passwordShop})
    }
    const cityShop = prompt('Введите город')
    if(addressShop == ''){
        alert("Вы не заполнили логин!")
    }
    else{
        await contract.methods.addNewShop(addressShop, password, cityShop).send({from: addressAccount, gas: '9999999'})
    }
}

export default AddShop