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
        this.startGame = this.startGame.bind(this)
        this.chooseWeapon = this.chooseWeapon.bind(this)
        this.determineWinner = this.determineWinner.bind(this)
    }

    startGame() {
        let rounds = 0
        let gameIntervals = setInterval(() => {
            rounds ++
            this.setState({
                computer: weaponInventory(Math.floor(Math.random() * weaponInventory.length)),
                winner: ""
            })
            if(rounds > 5) {
                clearInterval(gameIntervals)
                this.setState({
                    winner: this.determineWinner
                })
            }
        }, 100)
    }

    determineWinner() {
        const {user, computer} = this.state
        //Logic
        if (user === computer) {
            return "It's a Tie!!"
        } else if ((user === 'rock' && computer === 'scissors') || (user === 'scissors' && computer === 'paper') || (user === 'paper' && computer === 'rock')) {
            return 'You win'
        }
        return 'computer win'
    }

    chooseWeapon(weaponInventory) {
        this.setState({
            user: weaponInventory,
            winner: ''
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
                <button className="btn" onclick={this.startGame}>start</button>

                <div className="info">
                    <p>{winner ? this.determineWinner : null}</p>
                </div>
            </div>
        )
    }
}