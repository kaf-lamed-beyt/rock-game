import React from 'react'
import Players from './Players'
import '../scss/app.scss'

const weaponInventory = ['rock', 'paper', 'scissors']

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            user: weaponInventory[0],
            computer: weaponInventory[0],
            winner: '',
        }
        this.startGame = this.startGame.bind(this)
        this.chooseWeapon = this.chooseWeapon.bind(this)
        this.determineWinner = this.determineWinner.bind(this)
    }

    startGame(e) {
        e.preventDefault()
        let rounds = 0
        let gameIntervals = setInterval(() => {
            rounds++
            this.setState({
                computer:
                    weaponInventory[
                        Math.floor(Math.random() * weaponInventory.length)
                    ],
                winner: '',
            })
            if (rounds > 5) {
                clearInterval(gameIntervals)
                this.setState({
                    winner: this.determineWinner()
                })
            }
        }, 180)
    }

    determineWinner() {
        const { user, computer } = this.state
        //Logic
        if (user === computer) {
            return "It's a Tie!!"
        } else if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'scissors' && computer === 'paper') ||
            (user === 'paper' && computer === 'rock')
        ) {
            return 'You win'
        }
        return 'computer win'
    }

    chooseWeapon(weaponInventory) {
        this.setState({
            user: weaponInventory,
            winner: '',
        })
    }

    render() {
        const { user, computer, winner } = this.state

        return (
            <div className="app__container">
                <h1>Rock Paper Scissors</h1>
                <div className="game__play">
                    <Players weaponInventory={user} />
                    <Players weaponInventory={computer} />

                    <div className="controllers">
                        <div className="weapons">
                        <p>Choose your weapon 😊 </p>
                            <button
                                className="rock btn"
                                onClick={() => this.chooseWeapon('rock')}
                            >
                                Rock ⛰
                            </button>
                            <button
                                className="paper btn"
                                onClick={() => this.chooseWeapon('paper')}
                            >
                                Paper 🧻
                            </button>
                            <button
                                className="scissors btn"
                                onClick={() => this.chooseWeapon('scissors')}
                            >
                                Scissors ✂
                            </button>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="info">
                        <p>{winner ? this.determineWinner() : null}</p>
                    </div>
                    <button className="btn start" onClick={this.startGame}>
                        start
                    </button>
                </div>
            </div>
        )
    }
}
