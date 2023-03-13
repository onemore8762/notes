import {classNames} from "shared/lib/classNames/classNames";
import cls from './ExtraBar.module.css'
import {ContextMenu} from "shared/ui/ContextMenu";
import {Button} from "shared/ui/Button/Button";
import React, {ChangeEvent, memo, MouseEvent, useState} from "react";
import {ReactComponent as IconImageLight} from 'shared/assets/icons/image-download-light.svg'
import {ReactComponent as IconImageDark} from 'shared/assets/icons/image-download-dark.svg'
import {ReactComponent as IconPaletteLight} from 'shared/assets/icons/palette-light.svg'
import {ReactComponent as IconPaletteDark} from 'shared/assets/icons/palette-dark.svg'
import {Theme, useTheme} from "app/providers/ThemeProvider";

interface ExtraBarProps {
    className?: string
    onChangeColor: (value: number) => void
    onChangeImg: (event: ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => void
    save?: boolean
}

export const ExtraBar = memo((props: ExtraBarProps) => {
    const {className, onChangeColor, onChangeImg, onSubmit, save} = props
    const [context, setContext] = useState({isOpen: false, left: 0, top: 0})
    const {theme} = useTheme()

    const onOpenHandler = (e: MouseEvent) => {
        setContext({left: e.clientX, top: e.clientY, isOpen: true})
    }

    return (
        <div className={classNames(cls.ExtraBar, [className])}>
            {theme === Theme.DARK
                ? <IconPaletteDark onClick={onOpenHandler} width={25} height={25}></IconPaletteDark>
                : <IconPaletteLight onClick={onOpenHandler} width={25} height={25}></IconPaletteLight>
            }
            <ContextMenu settings={[0, 1, 2, 3, 4, 5]} isOpen={context.isOpen} onClose={(variant) => {
                setContext({...context, isOpen: false})
                if (variant) {
                    onChangeColor(variant)
                }
            }} left={context.left} top={context.top}/>

            <label style={{display: 'inline-block'}}>
                {theme === Theme.DARK
                    ? <IconImageDark width={25} height={25}></IconImageDark>
                    : <IconImageLight width={25} height={25}></IconImageLight>
                }
                <input type="file" name="photo" className={cls.uploadPhoto} onChange={onChangeImg}/>
            </label>

            {!save ? <Button theme={'clear'} className={cls.button} onClick={onSubmit}> Добавить</Button>
                : <Button theme={'clear'} className={cls.button} onClick={onSubmit}> Сохранить</Button>
            }

        </div>
    )
})
