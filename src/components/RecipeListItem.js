import React from 'react'

const RecipeListItem = ({ recipe, onClick, onFavorited, favorited }) => {
    console.log('recipe')
    return (
    <li 
        onClick={() => onClick(recipe.id)}
        style={{ margin: '5px 0', cursor: 'pointer' }}
    >
        <span onClick={ e => {
            e.stopPropagation()
            onFavorited(recipe.id)}
        }
        >{favorited ? '(v)' : '(x)'}</span>
        <span>{recipe.name}</span>
        <span>{recipe.category}</span>
    </li>
)}

export default RecipeListItem