import React, {memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import {Button} from 'shared/ui/Button/Button'
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {ReactComponent as DarkIcon} from 'shared/assets/icons/theme-dark.svg'
import {ReactComponent as LightIcon} from 'shared/assets/icons/theme-light.svg'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
        const {theme, toggleTheme} = useTheme()

        return (
            <Button
                theme={'clear'}
                style={{lineHeight: 0}}
                onClick={toggleTheme}
                className={classNames('', [className])}>
                {theme === Theme.DARK ? <DarkIcon height={25} width={25}/> : <LightIcon height={25} width={25}/>}
            </Button>
        )
    }
)
