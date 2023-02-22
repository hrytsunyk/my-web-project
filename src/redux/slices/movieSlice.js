import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    movies: [],
    movieInfo: null,
    page: null,
    totalPages: null,
    loading: null,
    error: null
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getMovies({page});
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const getInfo = createAsyncThunk(
    'movieSlice/getInfo',
    async ({movieId}, thunkAPI) => {
        try {
          const {data} =  await movieService.getMovieId(movieId)
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                console.log(action.payload);
                const {page, results, total_pages} = action.payload
                state.loading = false;
                state.page = page;
                state.totalPages = total_pages;
                state.movies = results;

            })
            .addCase(getMovies.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getInfo.fulfilled, (state, action) => {
                console.log(action.payload);
                state.movieInfo=action.payload
            })

    }
});

const {reducer: movieReducer} = movieSlice;


const movieActions = {
    getMovies,
    getInfo
};


export {
    movieReducer,
    movieActions
}