import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../shared/baseUrl';

export const fetchRunningBacks = createAsyncThunk(
    'runningBacks/fetchRunningBacks', 
    async () => {
        const response = await fetch(baseUrl + 'runningBacks');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const runningBacksSlice = createSlice({
    name: 'runningBacks',
    initialState: { isLoading: true, errMess: null, runningBacksArray: []},
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRunningBacks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRunningBacks.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.errMess = null;
                state.runningBacksArray = action.payload;
            })
            .addCase(fetchRunningBacks.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const runningBacksReducer = runningBacksSlice.reducer;