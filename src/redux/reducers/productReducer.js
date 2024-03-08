import {ActionTypes} from '../constants/actionTypes';

export const initialState = {
    products: []  
}

export const iState = {
    product: {}
}

export const productReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        default: return state;
    }
} 

export const selectedProductReducer = (state = iState, {type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default: return state;
    }
}