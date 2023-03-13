import {type ChangeEvent, type InputHTMLAttributes, memo} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Input.module.css'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(e.target.value)
    }

    return (
        <input type={type}
               value={value}
               className={classNames(cls.input, [className])}
               onChange={onChangeHandler}
               {...otherProps}
        />
    )
})
