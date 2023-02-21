import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    genres:[]
}


const getGenres = createAsyncThunk(
    'getGenres',
    async (_,thunkAPI)=>{
        try {
            const {data} = await movieService.getGenres()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);



const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers:{},
    extraReducers:builder => {
        builder
            .addCase(getGenres.fulfilled,(state, action) => {
                const{genres}= action.payload
                state.genres = genres;
            })
    }
});

const {reducer:genreReducer} =genreSlice;

const genreAction = {
    getGenres
}

export {
    genreReducer,
    genreAction
}