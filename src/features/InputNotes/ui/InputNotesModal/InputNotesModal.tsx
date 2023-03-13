import {classNames} from 'shared/lib/classNames/classNames'
import {Modal} from "shared/ui/Modal/Modal";
import {Input} from "shared/ui/Input/Input";
import {ExtraBar} from "widgets/ExtraBar";
import React, {ChangeEvent, useState} from "react";
import {inputActions} from "../../model/slice/inputSlice";
import {notesActions} from "entities/Notes";
import {Note} from "entities/Notes/model/types/notesSchema";
import {useDispatch} from "react-redux";
import {Button} from "shared/ui/Button/Button";
import cls from './InputNotesModal.module.css'
import {useTheme} from "app/providers/ThemeProvider";
import {getByColor} from "shared/lib/getByColor/getByColor";

interface InputNodesModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    initialState: Note
}

export const InputNodesModal = (props: InputNodesModalProps) => {
    const {className, isOpen, onClose, initialState} = props
    const [state, setState] = useState(initialState)
    const {theme} = useTheme()
    const dispatch = useDispatch()
    const onChangeHeader = (value: string) => {
        setState({...state, name: value})
    }
    const onChangeDescription = (value: string) => {
        setState({...state, description: value})
    }

    const onChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
        const maybeFile = e.target.files?.[0]
        if (maybeFile) {
            let reader2 = new FileReader();
            reader2.readAsDataURL(maybeFile);
            reader2.onloadend = function () {
                let base64data = reader2.result;
                if (base64data) {
                    setState({...state, image: base64data.toString()})
                }
            }
        }
    }

    const onChangeColor = (value: number) => {
        setState({...state, color: value})
    }

    const onClickHandler = () => {
        if (state.name !== '' || state.description !== '' || state.image) {
            dispatch(notesActions.updateNotes({
                id: state.id,
                name: state.name,
                description: state.description,
                image: state.image,
                color: state.color
            }))
            dispatch(inputActions.clearInput())
            setState({} as Note)
            onClose()
        }
    }

    return (
        <Modal
            className={classNames('', [className])}
            open={isOpen}
            onClose={onClose}

        >
            <div className={classNames(cls.InputNotesModal, [className])}
                 style={{backgroundColor: getByColor(theme, state.color)}}>
                <div className={cls.content}>
                    {state.image && <div className={cls.wrapperImage}>
                        <img src={state.image} alt={'avatar'} width={'100%'}/>
                        <Button theme={'outline'}
                                onClick={() => {
                                    dispatch(notesActions.updateNotes({...state, image: ''}))
                                    setState({...state, image: ''})
                                }}
                                className={cls.buttonDelete}>
                            X
                        </Button>
                    </div>}

                    <Input onChange={onChangeHeader}
                           placeholder={'Введите заголовок...'}
                           value={state.name || ''}
                           className={cls.header}
                    />

                    <Input onChange={onChangeDescription}
                           placeholder={'Заметка...'}
                           value={state.description || ''}
                           className={cls.description}
                    />
                </div>
                <ExtraBar onChangeColor={onChangeColor} onChangeImg={onChangeImg} onSubmit={onClickHandler} save/>
            </div>
        </Modal>
    )
}
