import { createStore } from "redux";
import rootReducers from "./RootReducer";
const store = createStore(rootReducers);
export default store;