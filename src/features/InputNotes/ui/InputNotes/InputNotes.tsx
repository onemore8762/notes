import React, {ChangeEvent, useCallback} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './InputNotes.module.css'
import {Input} from "shared/ui/Input/Input";
import {useAppDispatch} from "shared/hooks/useAppDispatch/useAppDispatch";
import {notesActions} from "entities/Notes";
import {inputActions} from "../../model/slice/inputSlice";
import {ExtraBar} from "widgets/ExtraBar";
import {useTheme} from "app/providers/ThemeProvider";
import {useSelector} from "react-redux";
import {getInputName} from "../../model/selectors/getInputName/getInputName";
import {getInputDescription} from "../../model/selectors/getInputDescription/getInputDescription";
import {getInputImage} from "../../model/selectors/getInputImage/getInputImage";
import {getInputColor} from "../../model/selectors/getInputColor/getInputColor";
import {getByColor} from "../../../../shared/lib/getByColor/getByColor";


interface InputNotesProps {
    className?: string
}

export const InputNotes = ({className}: InputNotesProps) => {
    const dispatch = useAppDispatch();
    const {theme} = useTheme()
    const name = useSelector(getInputName)
    const description = useSelector(getInputDescription)
    const image = useSelector(getInputImage)
    const color = useSelector(getInputColor)

    const onChangeHeader = useCallback((value: string) => {
        dispatch(inputActions.setName(value))
    }, [dispatch]);

    const onChangeDescription = useCallback((value: string) => {
        dispatch(inputActions.setDescription(value))
    }, [dispatch]);

    const onChangeImg = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const maybeFile = e.target.files?.[0]

        if (maybeFile) {
            let reader = new FileReader();
            reader.readAsDataURL(maybeFile);
            reader.onloadend = function () {
                let base64data = reader.result;
                if (base64data) {
                    dispatch(inputActions.setImage(base64data.toString()))
                }
            }
        }
    }, [dispatch]);
    const onChangeColor = useCallback((value: number) => {
        dispatch(inputActions.setColor(value))
    }, [dispatch]);

    const onClickHandler = useCallback(() => {
        if (name !== '' || description !== '' || image) {
            dispatch(notesActions.addNotes({name, description, image, color}))
            dispatch(inputActions.clearInput())
        }},[name, description, image, color])

    return (
        <div className={classNames(cls.InputNotes, [className])} style={{backgroundColor: getByColor(theme, color)}}>
            <div className={cls.content}>
                {image && <img src={image} alt={'avatar'} width={'100%'}/>}

                <Input onChange={onChangeHeader}
                       placeholder={'Введите заголовок...'}
                       value={name}
                       className={cls.header}
                />

                <Input onChange={onChangeDescription}
                       placeholder={'Заметка...'}
                       value={description}
                       className={cls.description}
                />
            </div>
            <ExtraBar onChangeColor={onChangeColor}
                      onChangeImg={onChangeImg}
                      onSubmit={onClickHandler}
            />
        </div>
    );
}
