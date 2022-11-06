async function DeleteShop(contract, addressAccount, shop) {
    await contract.methods.deleteShop(shop.id_shop).send({from: addressAccount, gas: '9999999'})
}

export default DeleteShop