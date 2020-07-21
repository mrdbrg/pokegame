import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

class Pokecard extends Component {
  
  padToThree = (number) => {
    return number <= 999 ? `00${number}`.slice(-3) : number
  }

  pokemonImgSrc = (pokeId) => {
    return `${POKE_API}${this.padToThree(pokeId)}.png`
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