import {useState} from 'react';

export const useLocalStorage = (key, intialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if(window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        window.localStorage.setItem(key, JSON.stringify(intialValue));
        return intialValue;
    })

    const setValue = value => {
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue];
}