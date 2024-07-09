import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieDetails:{}
}

const movieSlice = createSlice({
    initialState,
    name: "movies",
    reducers: {
        loadDetails : (state,action)=>{
            state.movieDetails = action.payload;
        }
    }
})

export default movieSlice.reducer;
export const {loadDetails} = movieSlice.actions;