import { useEffect, useState, Dispatch, SetStateAction } from "react";
type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>,
]
const UserPersitedState = <T>(key: string, initialState: any): Response<T> => {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])
    return [state, setState]
}

export default UserPersitedState