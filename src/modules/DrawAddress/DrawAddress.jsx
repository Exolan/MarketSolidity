function DrawAddress({setAccount, account, balance, accounts}){
    async function changeOption(setAccount){
        const select = document.querySelector('select')
        setAccount(select.options[select.options.selectedIndex].innerHTML)
    }
    return (
        <div>
            <h1>Ваш адрес: {account}</h1>
            <h2>Ваш баланс: {balance} eth</h2>
            <select name="" id="" onChange={()=>{changeOption(setAccount)}}>
                {accounts.map((account)=>{
                    return(
                        <option value="" key={account}>{account}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default DrawAddress