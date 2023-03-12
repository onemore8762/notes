import React, { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.css'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {

    return (
        <div className={classNames(cls.NotFoundPage, [className])}>
            Страница не найдена
        </div>
    )
}
