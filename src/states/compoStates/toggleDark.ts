import { createSlice } from "@reduxjs/toolkit";
import { isDarkMode } from "../../types/compoTypes/interfaces";

const initialState: isDarkMode = {
    isDarkMode: true
}

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode //Actions for the slice defined here
        }
    }
})

export const { toggleDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer