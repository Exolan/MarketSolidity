import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AddShop from "../AddShop"
import AddReview from "../AddReview"
import AddComment from "../AddComment";
import ButtonsLike from "../ButtonsLike";
import './Shops.css'
import ButtonsLikeComment from "../ButtonsLikeComment/ButtonsLikeComment";
import DeleteShop from "../DeleteShop";

function sumRate(shop){
    let i = 0;
    let rating = 0;
    if(shop.book.length == 0){
        return 0
    }
    else{
        for(const review of shop.book){
            if(review.rate){
                i++
                rating = rating + Number(review.rate)
            }
        }
        return rating/i
    }
}

function Shops({web3, contract}){
    const addressAccount = useSelector((state)=>state.addressAccount)
    const account = useSelector((state)=>state.account)
    const [shops, setShops] = useState([])
    const [click, setClick] = useState(false)

    useEffect(()=>{
        async function changeShop(){
            const shops = await contract.methods.viewShops().call()
            setShops(shops)
        }
        changeShop()

        if(click){
            console.log(1);
        }
    }, [shops])

    return (
        <div className="shops">
            {shops.map((shop, index)=>{
                return(
                    <div key={index} className="shop">
                        <div className="shop-info">
                            <p>ID: {shop.id_shop}</p>
                            <p>Адрес: {shop.address_shop}</p>
                            <p>Рейтинг: {sumRate(shop)}</p>
                            <p>Город: {shop.city}</p>
                            <p>Продавцы</p>
                            <div className="shop-workers">
                                {shop.workers.map((worker, index)=>{
                                    return(
                                        <div key={index}>
                                            <p>{worker}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="reviews">
                            <p>Отзывы</p>
                                {shop.book.map((review, index)=>{
                                    return(
                                        <div key={index} className="review">
                                            <p>Пользователь: {review.user}</p>
                                            <p>Отзыв: {review.review}</p>
                                            <p>Оценка: {review.rate}</p>
                                            <p>Комментарии</p>
                                            {review.comments.length != 0 ? <div className="comments">
                                                {review.comments.map((comment, index)=>{
                                                    return(
                                                        <div key={index} className="comment">
                                                            <p>Комментатор: {comment.user}</p>
                                                            <p>Комментарий: {comment.comment}</p>
                                                            {account.activeRole != 0 ? <ButtonsLikeComment addressAccount = {addressAccount} shop = {shop} review = {review} contract = {contract} comment = {comment}/> : null}
                                                            <button onClick={()=>{AddComment(contract, shop, review, addressAccount); setShops([])}}>Ответить</button>
                                                        </div>
                                                    )
                                                })}
                                            </div> : <button onClick={()=>{AddComment(contract, shop, review, addressAccount); setShops([])}}>Ответить</button>}
                                            {account.activeRole != 0 ? <ButtonsLike addressAccount = {addressAccount} shop = {shop} review = {review} contract = {contract}/> : null}
                                        </div>
                                    )
                                })}
                                {account.activeRole == 2 ? <div className="button-add-review"><button onClick={()=>{AddReview(contract, addressAccount, shop); setShops([])}}>Оставить отзыв</button> </div>: null}
                                {account.role == 0 ? <div className="button-delete-shop"><button onClick={()=>{DeleteShop(contract, addressAccount, shop); setShops([])}}>Удалить магазин</button></div> : null}
                        </div>
                    </div>
                )
            })}
            {account.role == 0 ? 
                <div className="button-add-shop">
                    <button onClick={()=>{AddShop(web3, contract, addressAccount); setShops([])}}>Добавить магазин</button>
                </div>:
            null}
        </div>
    )
}

export default Shops