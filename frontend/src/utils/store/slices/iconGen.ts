import { createSlice } from "@reduxjs/toolkit";

interface InitialSchema{
    API_BEARER_TOKEN: string;
}
const initialState: InitialSchema = {
    API_BEARER_TOKEN: ""
}

const iconSlice = createSlice({
    name:"Icon",
    initialState,
    reducers: {
        updateToken: (state, action) => {
            state.API_BEARER_TOKEN = action.payload
        }
    }
})

export const { updateToken} = iconSlice.actions
export default iconSlice.reducer