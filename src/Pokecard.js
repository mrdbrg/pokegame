import React, { Component } from 'react';
// import './Pokecard.css';

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
        <h1>{name}</h1>
        <img src={this.pokemonImgSrc(id)} alt={name} />
        <div>Type: {type}</div>
        <div>EXP: {base_experience}</div>
      </div>
    )
  }
}

export default Pokecard;