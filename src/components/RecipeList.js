import React from 'react'
import RecipeListItem from './RecipeListItem'

const RecipeList = ({ style, favorites, recipes, ...props }) => (
    <div style={style}>
        <h2>Recipes</h2>
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
    </div>
)

export default RecipeList