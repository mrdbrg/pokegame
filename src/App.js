import React, { Component } from 'react';
import PokemonContainer from './PokemonContainer';
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
      <PokemonContainer pokemons={this.state.pokemons} />
    )
  }
}

export default App;
