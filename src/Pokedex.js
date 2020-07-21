import React, { Component } from 'react'
import Pokecard from './Pokecard'
// import './Pokedex.css';

class Pokedex extends Component {
  // default props
  static defaultProps = {
    pokemons: [
      {
        "id": 150,
        "name": "MewTwo",
        "type": "Psychic",
        "base_experience": 220
      }
    ]
  }

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
    console.log("Pokedex ====> ", this.props.pokemons)
  
    return (
      <div className="Pokedex">
        {this.renderPokemons()}
      </div>
    )
  }
}

export default Pokedex;