import React from 'react';
import './App.css';

import PlayerGrid from './components/PlayerGrid';

class App extends React.Component {
  
  state = {
    player: []
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => res.map(players => {
        this.setState({player: [...this.state.player, players]})
      }))
  }

  render() {
    return (
      <div className="App">
        <p>Test</p>
        <PlayerGrid players={this.state.player}/>
      </div>
    );
  }
}

export default App;
