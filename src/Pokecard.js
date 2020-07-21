import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
  
  pokemonImgSrc = (pokeId) => {
    return `${POKE_API}${pokeId}.png`
  }

  render() {
    console.log("Pokecard ====> ", this.props)
    
    const { name, type, base_experience, id } = this.props
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img src={this.pokemonImgSrc(id)} alt={name} />
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {base_experience}</div>
      </div>
    )
  }
}

export default Pokecard;