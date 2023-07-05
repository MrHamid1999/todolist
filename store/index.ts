import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

export const store = () => 
    configureStore({
        reducer : {}
    })   


export type StoreType = ReturnType<typeof store>
export type StoreState = ReturnType<StoreType["getState"] >
export type StoreThunk<ReturnType = void> = ThunkAction<
ReturnType , 
StoreState , 
unknown , 
Action
>

export const wrapper = createWrapper<StoreType>(store)