export interface NotesSchema {
    notes: Note[]
}

export interface Note {
    id: number
    name: string
    description: string
    image: string
    color: number
}
