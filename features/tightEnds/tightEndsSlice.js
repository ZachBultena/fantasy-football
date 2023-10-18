import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../shared/baseUrl';

export const fetchTightEnds = createAsyncThunk(
    'tightEnds/fetchTightEnds', 
    async () => {
        const response = await fetch(baseUrl + 'tightEnds');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const tightEndsSlice = createSlice({
    name: 'tightEnds',
    initialState: { isLoading: true, errMess: null, tightEndsArray: []},
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTightEnds.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchTightEnds.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.errMess = null;
                state.tightEndsArray = action.payload;
            })
            .addCase(fetchTightEnds.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const tightEndsReducer = tightEndsSlice.reducer;