import React, {memo} from 'react'
import cls from './Navbar.module.css'
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "../../shared/ui/ThemeSwitcher/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({className}: NavbarProps) => {

        return (
            <div className={classNames(cls.Navbar, [className])}>
                <div>Заметки</div>
                <ThemeSwitcher/>
                <div>Аватар</div>
                {/*<Button theme={ButtonTheme.BACKGROUND_INVERTED}*/}
                {/*        className={cls.links}*/}
                {/*        onClick={onShowModal}*/}
                {/*>*/}
                {/*    {t('Войти')}*/}
                {/*</Button>*/}

                {/*<LoginModal*/}
                {/*        isOpen={isAuthModal}*/}
                {/*        onClose={onCloseModal}*/}
                {/*/>*/}
            </div>
        )
    }
)
