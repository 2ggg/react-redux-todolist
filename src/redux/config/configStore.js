import { combineReducers, createStore } from "@reduxjs/toolkit";
import todoLIstHandler from "../../modules/todoListModules";

const rootReducer = combineReducers({
  todoLIstHandler,
});
const store = createStore(rootReducer);

export default store;