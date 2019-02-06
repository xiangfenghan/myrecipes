import React from 'react'
import RecipeList from './RecipeList'

const Favorites = ({ state, toggleFavorite }) => (
    <div>
        <h2>Favorites</h2>
        <RecipeList 
            recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
            favorites={state.favorites}
            onFavorited={toggleFavorite}
        />
    </div>
)

export default Favorites