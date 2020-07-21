import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './PokemonContainer.css';

class PokemonContainer extends Component {

  renderPokemons = ()  => {
    return this.props.pokemons.map(pokemon => 
      <Pokecard 
        key={pokemon.id}
        id={pokemon.id} 
        name={pokemon.name} 
        type={pokemon.type} 
        base_experience={pokemon.base_experience} 
        /> 
    )
  }

  render() {
    console.log("PokemonContainer ====> ", this.props.pokemons)
  
    return (
      <div className="App">
        {this.renderPokemons()}
      </div>
    )
  }
}

export default PokemonContainer;