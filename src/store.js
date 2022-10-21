import { configureStore } from "@reduxjs/toolkit";

const defState = {
    balance: 0,
    addressAccount: '',
    account: {},
    accounts: [],
    role: '',
    activeRole: ''
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
        case 'SET_ROLES':
            return{...state, role: action.payload};
        case 'SET_ACTIVEROLE':
            return{...state, activeRole: action.payload};
        default:
            return state;
    }
}

export default configureStore({
    reducer: reducer
})
