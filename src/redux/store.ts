import {configureStore} from "@reduxjs/toolkit";

import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import createElement from './sliecs/CreateElementsSlice'
export const store = configureStore({
    reducer: {
        createElement
    },
})


export type RootState = ReturnType<typeof store.getState>


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()