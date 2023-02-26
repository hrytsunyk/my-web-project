import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";


const initialState = {
    searchResult: null,
    page:null,
    totalPages:null
};


const getSearch= createAsyncThunk(
    'searchSlice/getSearch',
    async ({searchParams}, thunkAPI)=>{
        try {
            const {data} = await movieService.searchMovie(searchParams)
            console.log(searchParams);
            console.log(data)
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
                const {results,page, total_pages}=action.payload
                console.log(results);
                state.searchResult=results;
                state.page=page;
                state.totalPages=total_pages;
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

