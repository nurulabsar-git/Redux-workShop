import { ActionsType } from "../Constants/ActionsType";
const initialState = {
    products: [],
};
export const productsReducer = (state= initialState, {type, payload}) =>{
   switch(type){
       case ActionsType.SET_PRODUCTS:
           return {
               ...state, products: payload
           };
        default:
            return state;
   } 
};
export const selectedProductReducer = (state={}, {type, payload}) =>{
    console.log(type);
    switch(type){
        case ActionsType.SELECTED_PRODUCT:
         return {...state, ...payload};
         case ActionsType.REMOVE_SELECTED_PRODUCT:
         return {};
         default: 
         return state;
    }
};