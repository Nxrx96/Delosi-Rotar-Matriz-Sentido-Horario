"use client"

import React from "react"
import styles from './square.module.css'

interface ISquareProps {
    label: number
}

export const Square: React.FC<ISquareProps> = ({
    label
}) => {
    return (
        <React.Fragment>
            <div className={styles.square}> { label } </div>
        </React.Fragment>
    )
}