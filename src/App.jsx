import React from 'react'
import Stage from './Stage'

const ABC = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const words = ['dog', 'cat', 'mouse', 'goose', 'whale', 'tamaraw']
const NUMBER_OF_STAGES = 8

// generate random word
// give hint
// input letter, add step to the hangman, or reveal letter

class App extends React.Component {

  state = {
    progress: [],
    word: '',
    status: 'active',
    guessCount: 0,
  }

  componentWillMount() {
    const word = words[0]
    this.setState({
      word,
      progress: word.replace(/[a-z]/g, '_').split(''),
    })
  }

  guess = (guessedLetter) => {
    const { progress, status, word } = this.state
    if (status !== 'active') {
      alert('game is over fool!')
      return
    }
    let { guessCount } = this.state
    const newProgress = progress.slice()
    let isWrong = true

    for (let idx = 0; idx < word.length; idx += 1) {
      const letter = word[idx]
      if (letter !== guessedLetter) {
        continue
      }
      newProgress[idx] = letter
      isWrong = false
    }

    if (isWrong) {
      guessCount += 1
      this.setState({ guessCount })
      if (guessCount === NUMBER_OF_STAGES) {
        this.setState({
          status: 'lost',
          lastWords: prompt('any last words?'),
        })
        alert('good bye my friend ...')
      }
      return
    }

    this.setState({ progress: newProgress })

    if (newProgress.indexOf('_') === -1) {
      this.setState({
        status: 'win',
      })
      alert('you win!')
    }
  }

  render() {
    return (
      <div>
        <div>Word: {this.state.word}</div>
        <div>Progress: {this.state.progress}</div>
        <div>{this.state.lastWords}</div>
        <div>{ABC.map(letter => (
            <button onClick={() => this.guess(letter)} key={letter}>{letter}</button>
          ))}</div>
        <div><Stage stage={this.state.guessCount} /></div>
      </div>
    )
  }
}

export default App
