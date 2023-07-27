import React from 'react';
import styles from './label.module.css'

interface ILabelProps {
    htmlFor?: string
    text: string
    className?: string
}

export const Label: React.FC<ILabelProps> = ({
    htmlFor,
    text,
    className,
}) => {
    return (
        <label htmlFor={htmlFor} className={ `${styles.label} ${className || ''}` } > { text } </label>
    )
} 