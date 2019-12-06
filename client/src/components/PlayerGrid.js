import React from 'react';
import './PlayerGrid.css'

import PlayerCard from './PlayerCard';

const PlayerGrid = ({players}) => {
    return (
        <div className='players'>
            {players.map(player => (
                <PlayerCard key={player.name}player={player}/>
            ))}
        </div>
    )
}

export default PlayerGrid;