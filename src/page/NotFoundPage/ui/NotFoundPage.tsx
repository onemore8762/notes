import React from 'react'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.css'
import {Button} from "../../../shared/ui/Button/Button";
import {useNavigate} from "react-router-dom";

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({className}: NotFoundPageProps) => {

    const navigate = useNavigate()

    return (
        <div className={classNames(cls.NotFoundPage, [className])}>
            <div>
                Страница не найдена
            </div>
            <Button onClick={() => navigate('notes')}>
                Вернуться на главную
            </Button>
        </div>
    )
}
