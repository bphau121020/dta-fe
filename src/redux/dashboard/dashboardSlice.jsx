import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        place: [],
        suggestPlace: [],
        cal: [],
        input: [],
        max: []
    },
    reducers: {
        fetchPlace: (state, action) => {
            state.place = action.payload;
        },
        saveSuggestPlace: (state, action) => {
            state.suggestPlace = action.payload;
        },
        fetchCal: (state, action) => {
            state.cal = action.payload;
        },
        fetchInput: (state, action) => {
            state.input = action.payload
        },
        fetchMax: (state, action) => {
            state.max = action.payload
        }

    },
});

export const { fetchPlace, fetchCal, fetchInput, fetchMax, saveSuggestPlace } = dashboardSlice.actions;

export default dashboardSlice.reducer;
