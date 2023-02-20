import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {themeReducer} from "./slices/themeSlice";


const rootReducer = combineReducers({
    movies: movieReducer,
    themes: themeReducer
})

const setupStore = () =>configureStore({
    reducer:rootReducer
});

export {
    setupStore
}