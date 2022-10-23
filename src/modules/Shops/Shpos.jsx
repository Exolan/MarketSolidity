import { useEffect, useState } from "react"

function Shops({contract}){
    const [shops, setShops] = useState([])
    useEffect(()=>{
        async function changeShop(){
            const shops = await contract.methods.viewShops().call()
            setShops(shops)
        }
        changeShop()
    }, [shops])
    return (
        <div>
            {shops.map((shop, index)=>{
                return(
                    <div key={index}>
                        <p>{shop.id_shop}</p>
                        <p>{shop.address_shop}</p>
                        <p>{shop.city}</p>
                        <select name="" id="">
                            {shop.workers.map((worker)=>{
                                <option value="">
                                    <p>{worker}</p>
                                </option>
                            })}
                        </select>
                        <select name="" id="">
                        {shop.book.map((review)=>{
                            return(
                                <option value="">
                                    <p>Пользователь: {review.user}</p>
                                    <p>Комментарий: {review.review}</p>
                                    <p>Оценка: {review.rate}</p>
                                    <select name="" id="">
                                        {review.comments.map((comment)=>{
                                            return(
                                                <option value="">
                                                    <p>Комментатор: {comment.user}</p>
                                                    <p>Комментарий: {comment.comment}</p>
                                                </option>
                                            )
                                        })}
                                    </select>
                                </option>
                            )
                            })}
                        </select>
                    </div>
                )
            })}
            <div>
                <button>Добавить магазин</button>
            </div>
        </div>
    )
}

export default Shops