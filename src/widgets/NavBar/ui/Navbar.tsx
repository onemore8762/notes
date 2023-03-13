import React, {memo} from 'react'
import cls from './Navbar.module.css'
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import {Avatar} from "shared/ui/Avatar/Avatar";
import userDark from 'shared/assets/icons/user-dark.svg'
import userLight from 'shared/assets/icons/user-light.svg'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {ReactComponent as NotesIcon} from 'shared/assets/icons/notes.svg'
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({className}: NavbarProps) => {
        const {theme} = useTheme()
        const src = theme === Theme.DARK ? userDark : userLight

        return (
            <div className={classNames(cls.Navbar, [className])}>
                <AppLink to={'/notes'} className={cls.header}>
                    <NotesIcon width={35} height={45}/>
                    <div className={cls.name}>Notes</div>
                </AppLink>
                <div className={cls.right}>
                    <ThemeSwitcher/>
                    <Avatar src={src} size={45}/>
                </div>
            </div>
        )
    }
)

