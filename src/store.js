import { configureStore } from "@reduxjs/toolkit";

const defState = {
    balance: 0,
    addressAccount: '',
    account: {},
    accounts: [],
    role: '',
    activeRole: '',
    isShop: false
}

const reducer = (state = defState, action) => {
    switch (action.type){
        case 'SET_BALANCE':
            return{...state, balance: action.payload};
        case 'SET_ADDRESSACCOUNT':
            return{...state, addressAccount: action.payload};
        case 'SET_ACCOUNT':
            return{...state, account: action.payload};
        case 'SET_ACCOUNTS':
            return{...state, accounts: action.payload};
        case 'SET_ROLE':
            return{...state, role: action.payload};
        case 'SET_ACTIVEROLE':
            return{...state, activeRole: action.payload};
        case 'SET_SHOP':
            return{...state, isShop: action.payload};
        default:
            return state;
    }
}

export default configureStore({
    reducer: reducer
})
