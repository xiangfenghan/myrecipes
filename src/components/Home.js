import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'

class Home extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
      currentRecipe: null,
    }

    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then((recipes) => {
        this.setState({
          recipes: recipes
        })
    })
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

  toggleFavorite = id => {
    this.setState(({ favorites, ...state }) => {
      const index  = favorites.indexOf(id)
      if(index !== -1) {
        return { ...state, favorites: favorites.filter(f => {
            return f !== id
          }
        )}
      }
      return { ...state, favorites: [...favorites, id] }
    })
  }

  render () {
    const { recipes, favorites, currentRecipe } = this.state
    return (
      <div>
        <main style={{ display: 'flex' }}>
          <RecipeList
            style={{ flex: '0 0 30%' }}
            recipes={recipes}
            favorites={favorites}
            onClick={this.onRecipeClick}
            onFavorited={this.toggleFavorite}
          />
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