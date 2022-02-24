import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { loginReducer, registerNewUserReducer } from "./reducers/userReducer";

import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import { placeOrderReducer } from "./reducers/orderReducer";

const finalReducer = combineReducers({

    getAllProductsReducer : getAllProductsReducer,
    getProductByIdReducer : getProductByIdReducer,
    cartReducer : cartReducer,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer,
    placeOrderReducer : placeOrderReducer

})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')): null


const initialState = {
    cartReducer : {cartItems : cartItems},
    loginReducer : {currentUser:currentUser}
}

const composeEnhancers = composeWithDevTools({

});

const store = createStore(finalReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
  ))

  export default store