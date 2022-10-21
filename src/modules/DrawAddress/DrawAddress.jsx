import { useSelector } from "react-redux"

function DrawAddress(){
    const account = useSelector((state) => state.account)
    const accounts = useSelector((state) => state.accounts)
    const balance = useSelector((state) => state.balance)
    return (
        <div>
            <h1>Ваш адрес: {account}</h1>
            <h2>Ваш баланс: {balance} eth</h2>
        </div>
    )
}

export default DrawAddress

// async function changeOption(setAccount){
    //     const select = document.querySelector('select')
    //     setAccount(select.options[select.options.selectedIndex].innerHTML)
    // }

{ <select name="" id="" onChange={()=>{changeOption(setAccount)}}>
                {accounts.map((account)=>{
                    return(
                        <option value="" key={account}>{account}</option>
                    )
                })}
            </select> }