import React from 'react'
import Header from './Header'
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'

class Home extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      recipes: [],
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

  onRecipeClick(id) {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then((recipe) => {
      this.setState({
        currentRecipe: recipe
      })
    })
  }

  render () {
    const { recipes, currentRecipe } = this.state
    return (
      <div>
        <main style={{ display: 'flex' }}>
          <RecipeList
            style={{ flex: '0 0 30%' }}
            recipes={recipes}
            onClick={this.onRecipeClick}
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