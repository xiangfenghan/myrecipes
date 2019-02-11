import React from 'react'
import RecipeListItem from './RecipeListItem'
import styled from 'styled-components'

const StyledUl = styled.ul`
    padding: 0;
`

const RecipeList = ({ style, favorites=[], recipes=[], ...props }) => (

    <StyledUl>
        {recipes.map(recipe => {
            return (
            <RecipeListItem
                key={recipe.id}
                recipe={recipe}
                favorited={favorites.includes(recipe.id)}
                {...props}
            />
            )
        })}
    </StyledUl>

)

export default RecipeList