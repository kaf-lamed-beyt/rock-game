import React from 'react'

const Buttons = () => {
    return(
        <div className="weapons">
            <button className="rock btn" onClick={() => this.chooseWeapon('rock')}>
                Rock ⛰ 
            </button>
            <button className="paper btn" onClick={() => this.chooseWeapon('paper')}>
                Paper 🧻 
            </button>
            <button className="scissors btn" onClick={() => this.chooseWeapon('scissors')}>
                Scissors \u{2702} 
            </button>
        </div>
    )
}

export default Buttons