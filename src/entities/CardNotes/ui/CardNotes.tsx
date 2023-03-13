import {memo} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './CardNotes.module.css'
import {Note} from "entities/Notes/model/types/notesSchema";
import {Button} from "shared/ui/Button/Button";
import {useTheme} from "app/providers/ThemeProvider";
import {getByColor} from "shared/lib/getByColor/getByColor";

interface CardNotesProps {
    className?: string
    note: Note
    onDelete: (value: number) => void
    onClick: (note: Note) => void
}

export const CardNotes = memo((props: CardNotesProps) => {
    const {theme} = useTheme()
    const {className, note, onDelete, onClick} = props
    const {name, description, image, color, id} = note

    return (
        <div className={classNames(cls.CardNotes, [className])}
             style={{backgroundColor: getByColor(theme, color)}}
             onClick={() => onClick(note)}>

            {image && <img src={image} width={'100%'} alt={'image notes'}/>}
            <div className={cls.name}>{name}</div>
            <div className={cls.description}>{description}</div>
            <Button theme={'clear'}
                    onClick={(e) => {
                        onDelete(id)
                        e.stopPropagation()
                    }}
                    className={cls.buttonDelete}>
                X
            </Button>
        </div>
    );
})
