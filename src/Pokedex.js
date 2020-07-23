import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css';

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

  displayTitle = () => {
    if (this.props.isWinner) {
      return <h1 className="Pokedex-winner">Winning Hand</h1>
    } else {
      return <h1 className="Pokedex-loser">Losing Hand</h1>
    }
  }

  render() {
    console.log("Pokedex ====> ", this.props.pokemons)
  
    return (
      <div className="Pokedex">
        {this.displayTitle()}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className="Pokedex-cards">
          {this.renderPokemons()}
        </div>
      </div>
    )
  }
}

export default Pokedex;