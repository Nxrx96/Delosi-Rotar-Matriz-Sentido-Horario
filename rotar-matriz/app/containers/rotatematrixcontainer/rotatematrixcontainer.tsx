'use client'

import React, { useState } from "react"
import { Label } from "../../components/label/label"
import { Input } from "../../components/input/input"
import { Button } from "../../components/button/button"
import { Matrix } from "../../components/matrix/matrix"
import { isJsonValid, parseJson } from "../../helpers/jsonhelper"
import { isMatrixValid } from "../../validators/rotarmatrixvalidator"
import styles from './rotatematrixcontainer.module.css'

interface IRotateMatrixContainerProps {

}

export const RotateMatrixContainer: React.FC<IRotateMatrixContainerProps> = () => {

    const [matrixTextValue, setMatrixTextValue] = useState<string>('')
    const [isMatrixTextValueValid, setIsMatrixTextValueValid] = useState<boolean>(true)
    const [matrixValue, setMatrixValue] = useState<number[][]>([])

    const onHandleChangeMatrixValue = (e: any) => {
        setMatrixTextValue(e.target.value)
    }

    const isJsonTextValueValid = (jsonText: string) => {

        const isJsonTextValid = isJsonValid(jsonText)
        if(!isJsonTextValid)
            return false

        const matrix = JSON.parse(jsonText)

        if(!Array.isArray(matrix))
            return false

        const isMatrixValueValid = isMatrixValid(matrix)
        if(!isMatrixValueValid)
            return false
        
        return true
    }

    const rotateMatrix = (matrix: number[][]): number[][] => {
        let rotatedArr = new Array(matrix.length).fill([])
        matrix.forEach(row => 
           row.forEach((col, colIdx) => rotatedArr[colIdx] = [...rotatedArr[colIdx], col])
        )
        return rotatedArr.reverse()
    }

    const onRotateClick = () => {
        setMatrixValue(_ => [])
        const isJsonTextValue = isJsonTextValueValid(matrixTextValue)
        setIsMatrixTextValueValid(isJsonTextValue)
        if(!isJsonTextValue)
            return
        
        const matrix = parseJson(matrixTextValue)
        setMatrixValue(_ => rotateMatrix(matrix))
    }

    return (
        <React.Fragment>
            <div className="center-element">
                <Label text="Ingresar Matriz"></Label>
                <Input type="text" className={styles.matrixinput} value={matrixTextValue} onChange={onHandleChangeMatrixValue}></Input>
                <Button text="Rotar" onClick={onRotateClick} ></Button>
            </div>
            <div className="center-element">
                { matrixTextValue }
            </div>
            <div className="center-element">
                {
                    !isMatrixTextValueValid && <Label text={"Invalid matrix value!"} className="error"></Label>
                }
            </div>
            <div className="center-element">
                <Matrix matrix={matrixValue}></Matrix>
            </div>
        </React.Fragment>
    )
}