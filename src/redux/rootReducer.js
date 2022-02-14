import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// Takes in local storage
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/userReducer";
import cartReducer from './cart/cart.reducer';

// JSON object
const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}
// white list contains name of reducer in string format

const rootReducer= combineReducers({
    user: userReducer,
    cart: cartReducer
}); 

export default persistReducer(persistConfig,rootReducer);