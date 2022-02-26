import {applyMiddleware, createStore} from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension";
const store = createStore(RootReducer, applyMiddleware(thunk));
export default store;