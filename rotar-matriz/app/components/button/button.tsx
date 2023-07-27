import React from 'react';
import styles from './button.module.css'

interface IButtonProps {
    text: string
    className?: string
    onClick: (event: any) => void
}

export const Button: React.FC<IButtonProps> = ({
    text,
    className,
    onClick
}) => {
    return (
        <button className={ `${styles.button} ${className || ''}` } onClick={ onClick }> { text } </button>
    )
} 