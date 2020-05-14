import React from 'react'
import rock from '../assets/rock.png'
import paper from '../assets/paper.png'
import scissors from '../assets/scissors.png'

const Players = ({weaponInventory}) => {
    return (
        <div className="players">
            <img
                className="player-weapon"
                src={
                    weaponInventory === 'rock'
                        ? rock
                        : weaponInventory === 'scissors'
                        ? scissors
                        : paper
                }
                alt="rock paper scissors"
            />
        </div>
    )
}

export default Players
