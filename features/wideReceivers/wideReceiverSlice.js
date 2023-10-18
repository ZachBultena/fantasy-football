import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from '../../shared/baseUrl';

export const fetchWideReceivers = createAsyncThunk(
    'wideReceiver/fetchWideReceivers', 
    async () => {
        const response = await fetch(baseUrl + 'wideReceivers');
        if (!response.ok) {
            return Promise.reject(
                'Unable to fetch, status: ' + response.status
            );
        }
        const data = await response.json();
        return data;
    }
);

const wideReceiversSlice = createSlice({
    name: 'wideReceivers',
    initialState: { isLoading: true, errMess: null, wideReceiversArray: []},
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWideReceivers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchWideReceivers.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.errMess = null;
                state.wideReceiversArray = action.payload;
            })
            .addCase(fetchWideReceivers.rejected, (state, action) => {
                state.isLoading = false;
                state.errMess = action.error
                    ? action.error.message
                    : 'Fetch failed';
            });
    }
});

export const wideReceiversReducer = wideReceiversSlice.reducer;