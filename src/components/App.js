import React from 'react'
import Players from './Players'
import Buttons from './Buttons'


const weaponInventory = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'    
}

export default class App extends React.Component {
    constructor() {
        this.state = {
            user: weaponInventory.ROCK,
            computer: weaponInventory.ROCK,
            winner: ''
        }
    }

    startGame = () => {
        let rounds = 0
        let gameIntervals = setInterval(() => {
            rounds ++
            this.setState({
                computer: weaponInventory(Math.floor(Math.random() * weaponInventory.length))
            })
        })
    }

    render() {
        const {user, computer, winner} = this.state

        return (
            <div className="app__container">
                <h1>Rock Paper Scissors</h1>
                <div className="game__play">
                    <Players weaponInventory={user} />
                    <Players  weaponInventory={computer} />
                </div>
                <div className="controllers">
                    <Buttons />
                </div>
                <button className="btn">start</button>
            </div>
        )
    }
}