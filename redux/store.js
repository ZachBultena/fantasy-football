import { configureStore } from "@reduxjs/toolkit";
import { wideReceiversReducer } from "../features/wideReceivers/wideReceiverSlice";
import { quarterBacksReducer } from "../features/quarterBacks/quarterBacksSlice";
import { runningBacksReducer } from "../features/runnningBacks/runningBacksSlice";
import { tightEndsReducer } from "../features/tightEnds/tightEndsSlice";


export const store = configureStore({
    reducer: {
        wideReceivers: wideReceiversReducer,
        runningBacks: runningBacksReducer,
        quarterBacks: quarterBacksReducer,
        tightEnds: tightEndsReducer
    }
});