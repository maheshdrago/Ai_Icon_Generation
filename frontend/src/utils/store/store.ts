import { configureStore } from "@reduxjs/toolkit";
import iconSlice from "./slices/iconGen"


const store = configureStore({
    reducer: {
        icon: iconSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch