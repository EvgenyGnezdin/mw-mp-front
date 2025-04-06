import { createSlice, Dispatch } from "@reduxjs/toolkit"
import { I_AppStore } from "./types"
import { T_AppThunk, T_Reducer } from "store/types"


const initialState: I_AppStore = {
  isLogged: false,
  isAppLoading: false
}

export const isLoggedReducer: T_Reducer<I_AppStore, boolean> = (state, action) => {
  state.isLogged = action.payload
}

export const isAppLoadingReducer: T_Reducer<I_AppStore, boolean> = (state, action) => {
  state.isAppLoading = action.payload
}

const appSlice = createSlice({
  name: "APP",
  initialState,
  reducers: {
    isLogged: isLoggedReducer,
    isAppLoading: isAppLoadingReducer
  }
})

const {
  isLogged: setIsLoggedAction,
  isAppLoading: setIsAppLoadingAction
} = appSlice.actions

export const setIsLogged = (isLogged:boolean): T_AppThunk => (dispach: Dispatch) => {
  dispach(setIsLoggedAction(isLogged))
}

export const setIsAppLoading = (isAppLoading:boolean): T_AppThunk => (dispach: Dispatch) => {
  dispach(setIsAppLoadingAction(isAppLoading))
}


export default appSlice.reducer