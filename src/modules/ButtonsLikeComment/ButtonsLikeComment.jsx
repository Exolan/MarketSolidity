function ButtonsLikeComment({addressAccount, shop, review, contract, comment}){
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

    async function clickOn(shop, contract, id, addressAccount, review, comment){
        if(comment.scores.length == 0){
            if(id == 0){
                await contract.methods.addScoreComment(shop.id_shop, review.id_review, comment.id_comment, true).send({from: addressAccount, gas: '999999'})
            }
            else{
                await contract.methods.addScoreComment(shop.id_shop, review.id_review, comment.id_comment, false).send({from: addressAccount, gas: '999999'})
            }
        }
        else{
            for(const score of comment.scores){
                if(score.user == addressAccount){
                    if(id == 0 & score.like === true || id == 1 & score.like === false){
                        await contract.methods.removeScoreComment(shop.id_shop, review.id_review, comment.id_comment, score.id_score).send({from: addressAccount, gas: '999999'})
                    }
                    else{
                        await contract.methods.removeScoreComment(shop.id_shop, review.id_review, comment.id_comment, score.id_score).send({from: addressAccount, gas: '999999'})
                        if(id == 0){
                            await contract.methods.addScoreComment(shop.id_shop, review.id_review, comment.id_comment, true).send({from: addressAccount, gas: '999999'})
                        }
                        else{
                            await contract.methods.addScoreComment(shop.id_shop, review.id_review, comment.id_comment, false).send({from: addressAccount, gas: '999999'})
                        }
                    }
                }
                else{
                    if(id == 0){
                        await contract.methods.addScoreComment(shop.id_shop, review.id_review, comment.id_comment, true).send({from: addressAccount, gas: '999999'})
                    }
                    else{
                        await contract.methods.addScoreComment(shop.id_shop, review.id_review, comment.id_comment, false).send({from: addressAccount, gas: '999999'})
                    }
                }
            }
        }
    }

    return(
        <div className="buttons-like">
            <button onClick={() => {clickOn(shop, contract, 0, addressAccount, review, comment)}}>
                <img src="/like.svg" alt="" />
                <span>{checkLike(comment)}</span>
            </button>
            <button onClick={() => {clickOn(shop, contract, 1, addressAccount, review, comment)}}>
                <img src="/dislike.svg" alt="" />
                <span>{checkDislike(comment)}</span>
            </button>
        </div>
    )
}

export default ButtonsLikeComment