import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.props.pokemon.map(pokemon => {
          // debugger
          console.log(pokemon)
          return(<PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>)
        })}

      </Card.Group>
    )
  }
}

export default PokemonCollection
