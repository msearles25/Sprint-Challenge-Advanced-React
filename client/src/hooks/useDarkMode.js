import {useEffect, useState} from 'react';

export const useDarkMode = key => {
    const [darkMode, setDarkMode] = useState(key)

    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('darkMode');
        }else {
            document.body.classList.remove('darkMode');
        }
    }, [darkMode])
    return [darkMode, setDarkMode]
}
    