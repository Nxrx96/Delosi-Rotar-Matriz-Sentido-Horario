"use client"

import React from "react"
import { Square } from "../square/square"
import styles from './matrix.module.css'

interface IMatrixProps {
    matrix: number[][]
}

export const Matrix: React.FC<IMatrixProps> = ({
    matrix
}) => {
    return (
        <React.Fragment>
            <div className={styles.matrix}>
                {
                    matrix.map((row, rowIdx) => {
                        return (
                            <div>
                                {
                                    matrix[rowIdx].map((item, columnIdx) =>(<Square key={`${rowIdx}${columnIdx}`} label={item}/>))
                                }
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}