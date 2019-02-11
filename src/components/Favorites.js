import React from 'react'
import RecipeList from './RecipeList'
import styled from 'styled-components'

const FavoritesPage = styled.div`
    font-family: 'Ubuntu', sans-serif;
`

class Favorites extends React.Component {

    constructor(props) {

        super(props)
        this.onRecipeClick = this.onRecipeClick.bind(this);
    }

    onRecipeClick = id => {
        fetch(`${API_URL}/v1/recipes/${id}`)
          .then(res => res.json())
          .then((recipe) => {
          this.setState({
            currentRecipe: recipe
          })
        })
    }

    render () {
        const { favorites, recipes } = this.props.state
    
        return (
            <FavoritesPage>
                <h2>Favorites</h2>
                <RecipeList 
                    recipes={recipes.filter(r => favorites.includes(r.id))}
                    favorites={favorites}
                    onClick={this.onRecipeClick}
                    onFavorited={this.props.toggleFavorite}
                />
            </FavoritesPage>
        )
    }
}

export default Favorites