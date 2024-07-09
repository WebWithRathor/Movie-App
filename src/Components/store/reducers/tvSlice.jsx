import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tvDetails:{}
}

const tvSlice = createSlice({
    initialState,
    name: "tvs",
    reducers: {}
})

export default tvSlice.reducer;
export const {} = tvSlice.actions;