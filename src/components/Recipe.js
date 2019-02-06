import React from 'react'
import RecipeDetail from './RecipeDetail'

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

            <div>
                <RecipeDetail recipe={recipe} />
            </div>

        )

    }
}

export default Recipe