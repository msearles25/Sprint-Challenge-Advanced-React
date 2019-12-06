import React from 'react';

import './PlayerCard.css'

const PlayerCard = ({player}) => {
    return (
        <div data-testid='playercard' className='playerContainer'>
            <div className='playerCard'>
                <p>Player Name: {player.name}</p>
                <p>Country: {player.country}</p>
                <p>Google Searches: {player.searches}</p>
            </div>
        </div>
        
    )
}

export default PlayerCard;