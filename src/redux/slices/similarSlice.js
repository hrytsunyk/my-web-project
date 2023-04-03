import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    sortByGenres: [],
    loading: null
};


const getSimilar = createAsyncThunk(
    'similarSlice/getSimilar',
    async ({genreQuery},thunkAPI)=>{
        try {
            const {data}= await movieService.getByGenres(genreQuery)
            return data
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const similarSlice = createSlice({
    name: 'similarSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getSimilar.fulfilled, (state, action)=>{
                state.loading=false
                let {results} = action.payload;
                state.sortByGenres=results
            })
            .addCase(getSimilar.pending, (state, action) => {
                state.loading=true
            })
    }
})


let {reducer: similarReducer} = similarSlice;

const similarActions = {
    getSimilar
}

export {
    similarReducer,
    similarActions
}