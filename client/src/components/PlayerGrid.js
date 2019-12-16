import React from 'react';
import './PlayerGrid.css'

import PlayerCard from './PlayerCard';
import { useDarkMode } from '../hooks/useDarkMode';

const PlayerGrid = ({ players }) => {

    const [darkMode, setDarkMode] = useDarkMode('darkmode',false)

    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }

    return (
        <div>
            <p className='darkToggle' onClick={toggleDark}>Dark Mode Toggle</p>
            <div  className='players'>
                {players.map(player => (
                    <PlayerCard key={player.name} player={player} />
                ))}
            </div>
        </div>
    )
}

export default PlayerGrid;