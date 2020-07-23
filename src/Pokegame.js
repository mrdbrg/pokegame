import React, { Component } from "react";
import Pokedex from './Pokedex';

class Pokegame extends Component {

  state = {
    hand_one: [],
    hand_two: []
  }

  createHand = (pokemonData) => {
    const hand2 = [...pokemonData]
    const hand1 = []

    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length)
      let randPokemon = hand2.splice(randIdx, 1)[0]
      hand1.push(randPokemon)
    }

    this.setState({
      hand_one: [...hand1],
      hand_two: [...hand2]
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemons")
    .then(r => r.json())
    .then(pokemonData => {
      this.createHand(pokemonData)
    })
  }

  handOneExp = () => {
    return this.state.hand_one.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
  }

  handTwoExp = () => {
    return this.state.hand_two.reduce((exp, pokemon) => exp + pokemon.base_experience, 0)
  }



  render() {
    console.log("Pokegame ====> ", this.state.hand_one)
    console.log("Pokegame ====> ", this.state.hand_two)
    return (
      <div>
        <Pokedex pokemons={this.state.hand_one} exp={this.handOneExp()} isWinner={this.handOneExp() > this.handTwoExp()} />
        <Pokedex pokemons={this.state.hand_two} exp={this.handTwoExp()} isWinner={this.handTwoExp() > this.handOneExp()} />        
      </div>
    );
  }
}

export default Pokegame;