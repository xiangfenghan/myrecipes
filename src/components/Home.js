import React from 'react'
import RecipeList from './RecipeList'
import RecipeDetail from './RecipeDetail'
import styled from 'styled-components'

const Main = styled.main`
    display: flex;
`

const SectionList = styled.div`
    flex: 0 0 30%;
    padding: 0 10px 0 0;
`

const SectionDetail = styled.div`
    position: relative;
    flex: 0 0 70%;
    padding: 0 0 0 10px;
    color: #666666;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
`

const Subtitle = styled.h2`
    color: #666666;
    font-family: 'Ubuntu', sans-serif;
    font-size: 26px;
`

class Home extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        currentRecipe: null,
      }

    this.onRecipeClick = this.onRecipeClick.bind(this)
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
            <Main>
                <SectionList>
                    <Subtitle>Recipes</Subtitle>
                    <RecipeList
                        recipes={recipes}
                        favorites={favorites}
                        onClick={this.onRecipeClick}
                        onFavorited={this.props.toggleFavorite}
                    />
                </SectionList>
                <SectionDetail>
                    <RecipeDetail
                        recipe={currentRecipe}
                    />
                </SectionDetail>
            </Main>
        </div>
      )
    }
}

export default Home