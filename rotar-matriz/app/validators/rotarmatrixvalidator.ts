export const isMatrixValid = (matrix: any[][]): boolean => {
    const isLengthValid = !matrix.some(x => x.length != matrix.length)
    const isValuesValid = matrix.some(x => x.some(y => !y))
    return isLengthValid && !isValuesValid
}