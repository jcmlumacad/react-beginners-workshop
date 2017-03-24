import React from 'react'

class Auth extends React.Component {

  state = {
    name: '',
    displayName: 'guest',
  }

  render() {
    return (
      <div>
        <h4>{this.state.displayName}</h4>
        <input
          placeholder="name"
          onChange={evt => this.setState({ name: evt.target.value })}
          value={this.state.name}
        />
        <button onClick={() => this.setState({ displayName: this.state.name })}>Submit!!!</button>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

export default Auth
