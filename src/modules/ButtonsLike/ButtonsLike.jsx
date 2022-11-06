import './ButtonsLike.css'

function ButtonsLike({addressAccount, shop, review, contract}){
    function checkLike(element){
        const array = []
        for(const score of element.scores){
            if (score.like) {
                array.push(score)
            }
        }
        return array.length
    }
    
    function checkDislike(element){
        const array = []
        for(const score of element.scores){
            if (!score.like) {
                array.push(score)
            }
        }
        return array.length
    }

    async function clickOn(shop, contract, id, addressAccount, review){
        if(review.scores.length == 0){
            if(id == 0){
                await contract.methods.addScoreReview(shop.id_shop, review.id_review, true).send({from: addressAccount, gas: '999999'})
            }
            else{
                await contract.methods.addScoreReview(shop.id_shop, review.id_review, false).send({from: addressAccount, gas: '999999'})
            }
        }
        else{
            for(const score of review.scores){
                if(score.user == addressAccount){
                    if(id == 0 & score.like === true || id == 1 & score.like === false){
                        await contract.methods.removeScoreReview(shop.id_shop, review.id_review, score.id_score).send({from: addressAccount, gas: '999999'})
                    }
                    else{
                        await contract.methods.removeScoreReview(shop.id_shop, review.id_review, score.id_score).send({from: addressAccount, gas: '999999'})
                        if(id == 0){
                            await contract.methods.addScoreReview(shop.id_shop, review.id_review, true).send({from: addressAccount, gas: '999999'})
                        }
                        else{
                            await contract.methods.addScoreReview(shop.id_shop, review.id_review, false).send({from: addressAccount, gas: '999999'})
                        }
                    }
                }
                else{
                    if(id == 0){
                        await contract.methods.addScoreReview(shop.id_shop, review.id_review, true).send({from: addressAccount, gas: '999999'})
                    }
                    else{
                        await contract.methods.addScoreReview(shop.id_shop, review.id_review, false).send({from: addressAccount, gas: '999999'})
                    }
                }
            }
        }
    }

    return(
        <div className="buttons-like">
            <button onClick={() => {clickOn(shop, contract, 0, addressAccount, review)}}>
                <img src="/like.svg" alt="" />
                <span>{checkLike(review)}</span>
            </button>
            <button onClick={() => {clickOn(shop, contract, 1, addressAccount, review)}}>
                <img src="/dislike.svg" alt="" />
                <span>{checkDislike(review)}</span>
            </button>
        </div>
    )
}

export default ButtonsLike