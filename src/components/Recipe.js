import React from 'react'
import RecipeDetail from './RecipeDetail'
import styled from 'styled-components'

const RecipePage = styled.div`
    font-family: 'Ubuntu', sans-serif;
`

class Recipe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            recipe: null
        }
    }

    componentDidMount() {
        
        const { id } = this.props.match.params

        fetch(`${API_URL}/v1/recipes/${id}`)
        .then(res => res.json())
        .then((recipe) => {
            this.setState({
                recipe
            })
        })
    }
    
    render () {

        const { recipe } = this.state

        return (

            <RecipePage>
                <RecipeDetail recipe={recipe} backButton />
            </RecipePage>

        )

    }
}

export default Recipe