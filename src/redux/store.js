import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {searchReducer} from "./slices/searchSlice";


const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    search: searchReducer
})

const setupStore = () =>configureStore({
    reducer:rootReducer
});

export {
    setupStore
}