import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    searchResult: null
};


const getSearch= createAsyncThunk(
    'searchSlice/getSearch',
    async ({searchParam}, thunkAPI)=>{
        try {
            const {data} = await movieService.searchMovie(searchParam)
            console.log(data);
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getSearch.fulfilled, (state, action) => {
                const {results}=action.payload
                console.log(results)
                state.searchResult=results;
                // console.log(results);
            })
    }
})

const {reducer:searchReducer} = searchSlice;


const searchActions = {
    getSearch
};

export {
    searchReducer,
    searchActions
}

