async function AddComment(contract, shop, review, addressAccount){
    const text = prompt('Введите комментарий')
    await contract.methods.addComment(shop.id_shop, review.id_review, text).send({from: addressAccount, gas: '9999999'})
}

export default AddComment