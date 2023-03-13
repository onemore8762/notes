import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InputSchema} from "../types/inputSchema";


const initialState: InputSchema = {
    name: '',
    description: '',
    image: '',
    color: 0
};

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setDescription: (state, action: PayloadAction<string>) => {
           state.description = action.payload
        },
        setImage: (state, action: PayloadAction<string>) => {
            state.image = action.payload
        },
        setColor: (state, action: PayloadAction<number>) => {
            state.color = action.payload
        },
        clearInput: (state) => {
            state.name = ''
            state.description = ''
            state.image = ''
            state.color = 0
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: inputActions } = inputSlice;
export const { reducer: inputReducer } = inputSlice;
