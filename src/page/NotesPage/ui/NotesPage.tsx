import React, {useCallback, useEffect, useState} from "react";
import {InputNotes} from "features/InputNotes/ui/InputNotes/InputNotes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "app/providers/StoreProvider/config/store";
import {notesActions} from "entities/Notes";
import {CardNotes} from "entities/CardNotes/ui/CardNotes";
import cls from './NotesPage.module.css'
import {Note} from "../../../entities/Notes/model/types/notesSchema";
import {InputNodesModal} from "../../../features/InputNotes/ui/InputNotesModal/InputNotesModal";
import {inputActions} from "../../../features/InputNotes";

export const NotesPage = () => {

    const notes = useSelector((state: AppRootState) => state.notes.notes)
    const dispatch = useDispatch()

    useEffect(() => {
        const notesLocalStorage = localStorage.getItem('notes')
        if (notesLocalStorage && JSON.parse(notesLocalStorage).length !== 0) {
            dispatch(notesActions.initialNotes(JSON.parse(notesLocalStorage)))
        } else {
            dispatch(notesActions.initialNotes([{
                id: 1,
                name: 'Заголовок',
                description: 'Тестовое описание',
                image: '',
                color: 3
            }]))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const onDeleteHandler = useCallback((id: number) => {
        dispatch(notesActions.deleteNotes(id))
    }, [])

    const onClickHandler = useCallback((value: Note) => {
        setModal({isOpen: true, data: value})
    }, [])
    const [modal, setModal] = useState({isOpen: false, data: {} as Note})
    return (
        <>
            <InputNotes/>
            <div className={cls.content}>
                {notes.map(el =>
                    <CardNotes note={el} key={el.id} onDelete={onDeleteHandler} onClick={onClickHandler}/>
                )}
            </div>
            {modal.isOpen && <InputNodesModal isOpen={modal.isOpen}
                                        initialState={modal.data}
                                        onClose={() => {
                                            setModal({...modal, isOpen: false})
                                            dispatch(inputActions.clearInput())
                                        }}/>
            }

        </>
    );
};
