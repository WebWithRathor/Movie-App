import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personDetails:{}
}

const personSlice = createSlice({
    initialState,
    name: "persons",
    reducers: {}
})

export default personSlice.reducer;
export const {} = personSlice.actions;