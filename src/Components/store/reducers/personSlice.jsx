import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personDetails:{}
}

const personSlice = createSlice({
    initialState,
    name: "persons",
    reducers: {
        loadPersonDetails : (state,action)=>{
            state.personDetails = action.payload;
        },
        removePersonDetails : (state,action)=>{
            state.personDetails = {};
        }
    }
})

export default personSlice.reducer;
export const {removePersonDetails,loadPersonDetails} = personSlice.actions;