import React from 'react'
import RecipeListItem from './RecipeListItem'

const RecipeList = ({ style, favorites, recipes, ...props }) => (

    <ul>
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
    </ul>

)

export default RecipeList