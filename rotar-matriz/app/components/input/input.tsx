import React from 'react';
import styles from './input.module.css'

interface IInputProps {
    type: string
    value: any
    className?: string
    onChange: (event: any) => void
}

export const Input: React.FC<IInputProps> = ({
    type,
    value,
    className,
    onChange
}) => {
    return (
        <input type={type} className={ `${styles.input} ${className || ''}`  } onChange={ onChange } value={value}/>
    )
} 