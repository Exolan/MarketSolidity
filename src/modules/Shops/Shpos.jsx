import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AddShop from "../AddShop"

function Shops({web3, contract}){
    const addressAccount = useSelector((state)=>state.addressAccount)
    const account = useSelector((state)=>state.account)
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
                        <div>
                            <p>Продавцы</p>
                            <div>
                                {shop.workers.map((worker, index)=>{
                                    return(
                                        <div key={index}>
                                            <p>{worker}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <p>Отзывы</p>
                                {shop.book.map((review, index)=>{
                                    return(
                                        <div key={index}>
                                            <p>Пользователь: {review.user}</p>
                                            <p>Комментарий: {review.review}</p>
                                            <p>Оценка: {review.rate}</p>
                                            <div name="" id="">
                                                <p>Комментарии</p>
                                                {review.comments.map((comment)=>{
                                                    return(
                                                        <div value="">
                                                            <p>Комментатор: {comment.user}</p>
                                                            <p>Комментарий: {comment.comment}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                                {account.activeRole == 2 ? <button>Оставить отзыв</button> : null}
                        </div>
                    </div>
                )
            })}
            {account.role == 0 ? 
                <div>
                    <button onClick={()=>{AddShop(web3, contract, addressAccount); setShops([])}}>Добавить магазин</button>
                </div>:
                null}
            
        </div>
    )
}

export default Shops