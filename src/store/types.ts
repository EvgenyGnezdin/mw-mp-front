import { Action, CaseReducer, PayloadAction, ThunkAction } from "@reduxjs/toolkit";


import store from "store";

export type T_RootState = ReturnType<typeof store.getState>
export type T_AppThunk<ReturnType = void> = ThunkAction<ReturnType, T_RootState, unknown, Action<string>>
export type T_Reducer<T, K = any> = CaseReducer<T, PayloadAction<K>>