import React from "react";
import { Action,createStore,combineReducers } from "redux";
import { messagesReducer } from "./messagesReducer";



export const rootReducer = combineReducers({messages:messagesReducer})
export const store = createStore(rootReducer);
