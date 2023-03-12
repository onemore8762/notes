import {type ButtonHTMLAttributes, memo, type ReactNode} from 'react'
import {classNames, type Mods} from 'shared/lib/classNames/classNames'
import cls from './Button.module.css'

type ButtonTheme =
    | 'clear'
    | 'clearInverted'
    | 'outline'
    | 'background'
    | 'backgroundInverted'

const ButtonSize = {
    M: 'size_m',
    L: 'size_l',
    XL: 'size_xl',
}

type ButtonSizeType = keyof typeof ButtonSize


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSizeType
    disabled?: boolean
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
        const {
            className,
            children,
            theme = 'outline',
            size = ButtonSize.M,
            square,
            disabled,
            ...otherProps
        } = props

        const mods: Mods = {
            [cls.square]: square,
            [cls.disabled]: disabled
        }

        return (
            <button
                type='button'
                className={classNames(cls.Button, [className, cls[size], cls[theme]], mods)}
                disabled={disabled}
                {...otherProps}
            >
                {children}
            </button>
        )
    }
)
