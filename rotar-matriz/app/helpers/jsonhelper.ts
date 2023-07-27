export const isJsonValid = (value: any): boolean => {
    try {
        JSON.parse(value)
        return true
    } catch (e) {
        return false
    }
}

export const parseJson = (value: string): any => JSON.parse(value)