import React, {type FC} from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Loader.module.css'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({className}) => {
    return (
        <div className={classNames(cls.ldsEllipsis, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
