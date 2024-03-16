import { configureStore } from "@reduxjs/toolkit";
import { darkModeSlice } from "../compoStates/toggleDark";

export const store = configureStore({
    reducer: {
        darkMode: darkModeSlice.reducer, //Use darkModeSLice.reducer since the reducer only accepts reducers
    }
})

export type RootState = ReturnType<typeof store.getState>  //Define a centralised type for the state with store.getState
export type AppDispatch = typeof store.dispatch
