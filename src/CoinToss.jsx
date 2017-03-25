import React from 'react'

const Coin = ['head', 'tail']

class CoinToss extends React.Component {

  state = {
    guess: '',
    score: 0
  }

  guess = (guessed) => {
    var tossCoin = Math.random() > 0.5 ? 'Head' : 'Tail'
    if (tossCoin === guessed) {
      this.setState({
        msg: `${tossCoin}: Success`,
        score: this.state.score + 1
      })
      return
    }
    this.setState({
      msg: `${tossCoin}: Failure`,
      score: this.state.score - 1
    })
  }

  render() {
    const { msg, score } = this.state
    return (
      <div>
        <h4>What is your guess?</h4>
        <button onClick={this.guessHead}>Head</button>
        <button onClick={this.guessTail}>Tail</button>

        <div>
          <h4>Output</h4>
          <h5>Message: {msg}</h5>
          <h5>Score: {score}</h5>
        </div>
      </div>
    )
  }

  guessHead = () => {this.guess('Head')}
  guessTail = () => {this.guess('Tail')}
}

export default CoinToss
