import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../shared/baseUrl';

export const fetchQuarterBacks = createAsyncThunk(
    'quarterBacks/fetchQuarterBacks', 
    async () => {
        const response = await fetch(baseUrl + 'quarterBacks');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const quarterBacksSlice = createSlice({
    name: 'quarterBacks',
    initialState: { isLoading: true, errMess: null, quarterBacksArray: []},
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuarterBacks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchQuarterBacks.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.errMess = null;
                state.quarterBacksArray = action.payload;
            })
            .addCase(fetchQuarterBacks.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const quarterBacksReducer = quarterBacksSlice.reducer;