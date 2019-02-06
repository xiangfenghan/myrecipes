import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'

class Home extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        currentRecipe: null,
      }

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

    const { currentRecipe } = this.state
    const { recipes, favorites } = this.props.state
    
    return (
      <div>
        <main style={{ display: 'flex' }}>
        <div>
          <h2>Recipes</h2>
          <RecipeList
            style={{ flex: '0 0 30%' }}
            recipes={recipes}
            favorites={favorites}
            onClick={this.onRecipeClick}
            onFavorited={this.props.toggleFavorite}
          />
        </div>
          <RecipeDetail
            style={{ flex: '0 0 70%' }}
            recipe={currentRecipe}
          />
        </main>
      </div>
    )
  }
}

export default Home