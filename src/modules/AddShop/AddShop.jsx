async function AddShop(web3, contract, addressAccount){
    const addressShop = prompt('Введите адрес')
    const passwordShop = prompt('Введите пароль')
    const password = await web3.utils.soliditySha3({type: 'string', value: passwordShop})
    const cityShop = prompt('Введите город')
    await contract.methods.addNewShop(addressShop, password, cityShop).send({from: addressAccount, gas: '9999999'})
}

export default AddShop