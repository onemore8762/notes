import {configureStore} from '@reduxjs/toolkit'
import {type StateSchema} from 'app/providers/StoreProvider/config/StateSchema'
import {notesReducer} from "../../../../entities/Notes";
import {inputReducer} from "../../../../features/InputNotes";

export const store = configureStore<StateSchema>({
    reducer: {
        notes: notesReducer,
        input: inputReducer
    },
})

export type AppDispatch = typeof store.dispatch
export type AppRootState = ReturnType<typeof store.getState>
