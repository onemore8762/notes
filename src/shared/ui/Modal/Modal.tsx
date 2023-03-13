import React, {HTMLAttributes, type MouseEvent, type ReactNode, useCallback, useEffect, useRef, useState} from 'react'
import cls from './Modal.module.css'
import {Portal} from "shared/ui/Portal/Portal";
import {classNames} from "../../lib/classNames/classNames";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    open: boolean
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        open,
        onClose,
        ...restProps
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if (open) {
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [open, onKeyDown])

    const onContentClick = (e: MouseEvent): void => {
        e.stopPropagation()
    }
    if (!open) return null


    const mods: Record<string, boolean> = {
        [cls.opened]: open,
        [cls.isClosing]: isClosing
    }
    return (
        <Portal>
            <div className={classNames(cls.Modal, [className], mods)} {...restProps}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
