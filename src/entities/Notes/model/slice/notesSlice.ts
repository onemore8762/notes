import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Note, NotesSchema} from '../types/notesSchema';

const initialState: NotesSchema = {
    notes: [],
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        initialNotes: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload
        },
        addNotes: (state, action: PayloadAction<{ name: string, description: string, image: string, color: number }>) => {
            state.notes.unshift({id: new Date().getTime(), ...action.payload})
        },
        deleteNotes: (state, action: PayloadAction<number>) => {
            const index = state.notes.findIndex(tl => tl.id === action.payload)
            if (index !== -1) {
                state.notes.splice(index, 1)
            }
        },
        updateNotes: (state, action: PayloadAction<{ id: number, name: string, description: string, image: string, color: number }>) => {
            const index = state.notes.findIndex(tl => tl.id === action.payload.id)
            if (index !== -1) {
                state.notes[index] = {
                    ...state.notes[index],
                    name: action.payload.name,
                    description: action.payload.description,
                    image: action.payload.image,
                    color: action.payload.color
                }
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const {actions: notesActions} = notesSlice;
export const {reducer: notesReducer} = notesSlice;
