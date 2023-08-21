import { combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import filterReducer from "./reducers/filterReducer";

const rootReducer = combineReducers({
    product: productReducer,
    filter: filterReducer
})
export default rootReducer;