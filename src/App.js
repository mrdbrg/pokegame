import React, { Component } from 'react';
import Pokedex from './Pokedex';
import './App.css';

class App extends Component {

  state = {
    pokemons: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemons")
    .then(r => r.json())
    .then(pokemonData => {
      this.setState({
        pokemons: pokemonData
      })
    })
  }

  render() {
    console.log(this.state.pokemons)
    return (
      <div className="App">
        <Pokedex pokemons={this.state.pokemons} />
      </div>
    )
  }
}

export default App;
