async function AddReview(contract, addressAccount, shop){
    const rate = prompt("Оценка от 1 до 10")
    const review = prompt('Напишите отзыв')
    await contract.methods.addReview(shop.id_shop, review, rate).send({from: addressAccount, gas: '9999999'})
}

export default AddReview