import {NotesSchema} from "entities/Notes/model/types/notesSchema";
import {InputSchema} from "features/InputNotes";

export interface StateSchema {
    notes: NotesSchema
    input: InputSchema
}
