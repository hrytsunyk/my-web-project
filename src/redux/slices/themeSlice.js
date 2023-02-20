import {createSlice} from "@reduxjs/toolkit";
import {useRef} from "react";


const initialState = {
    theme: 'light',
    dark: 'dark'
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        setDark: (state, action) => {
            state.theme=action.payload;

        }
    }
});


const {reducer: themeReducer, actions:{setDark}} = themeSlice;

const themeAction ={
    setDark,
}


export {
    themeReducer,
    themeAction,
}

