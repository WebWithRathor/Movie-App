import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tvDetails:{}
}

const tvSlice = createSlice({
    initialState,
    name: "tv",
    reducers: {
        loadTvDetails : (state,action)=>{
            state.tvDetails = action.payload;
        },
        removeTvDetails : (state,action)=>{
            state.tvDetails = {};
        }
    }
})

export default tvSlice.reducer;
export const {loadTvDetails,removeTvDetails} = tvSlice.actions;