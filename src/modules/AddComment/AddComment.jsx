async function AddComment(contract, shop, review, addressAccount){
    const text = prompt('Введите комментарий')
    console.log(review.id_review);
    await contract.methods.addComment(shop.id_shop, review.id_review, text).send({from: addressAccount, gas: '9999999'})
}

export default AddComment