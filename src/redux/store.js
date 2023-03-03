import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/movieSlice";
import {genreReducer} from "./slices/genreSlice";
import {searchReducer} from "./slices/searchSlice";
import {similarReducer} from "./slices/similarSlice";


const rootReducer = combineReducers({
    movies: movieReducer,
    genres: genreReducer,
    search: searchReducer,
    similar: similarReducer
})

const setupStore = () =>configureStore({
    reducer:rootReducer
});

export {
    setupStore
}