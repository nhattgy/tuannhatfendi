import { createStore, combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";

const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

const store = createStore(rootReducer);

export default store;
