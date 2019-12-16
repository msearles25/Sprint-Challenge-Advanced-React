import {useEffect} from 'react';

import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('darkMode');
        }else {
            document.body.classList.remove('darkMode');
        }
    }, [darkMode])
    return [darkMode, setDarkMode]
}
    