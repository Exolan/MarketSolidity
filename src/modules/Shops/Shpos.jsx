import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import AddShop from "../AddShop"
import AddReview from "../AddReview"

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

function checkLike(review){
    const array = []
    for(const score of review.scores){
        if (score.like) {
            array.push(score)
        }
    }
    return array.length
}

function checkDislike(review){
    const array = []
    for(const score of review.scores){
        if (!score.like) {
            array.push(score)
        }
    }
    return array.length
}

async function clickOn(shop, contract, id, addressAccount, review){
    console.log(1);
    for(const score of review.scores){
        if(score.user == addressAccount){
            if(id == '0' & score || id == '1' & !score){
                await contract.methods.removeScoreReview(shop.id_shop, review.id_review, score.id_score)
            }
            else{
                await contract.methods.removeScoreReview(shop.id_shop, review.id_review, score.id_score)
                if(id == '0'){
                    await contract.methods.addScoreReview(shop.id_shop, review.id_review, true)
                }
                else{
                    await contract.methods.addScoreReview(shop.id_shop, review.id_review, false)
                }
            }
        }
    }
}

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
                        <p>Рейтинг: {sumRate(shop)}</p>
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
                                            <p>Отзыв: {review.review}</p>
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
                                            {account.activeRole != 0 ? 
                                                <div>
                                                    <button id="0" onСlick={(e)=>{clickOn(shop, contract, e.target.id, addressAccount, review)}}><img src="/like.svg" alt="" /><span>{checkLike(review)}</span></button>
                                                    <button id="1" onСlick={(e)=>{clickOn(shop, contract, e.target.id, addressAccount, review)}}><img src="/dislike.svg" alt="" /><span>{checkDislike(review)}</span></button>
                                                </div>
                                                : null}
                                        </div>
                                    )
                                })}
                                {account.activeRole == 2 ? <button onClick={()=>{AddReview(contract, addressAccount, shop); setShops([])}}>Оставить отзыв</button> : null}
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