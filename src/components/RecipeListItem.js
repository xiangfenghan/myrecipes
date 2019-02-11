import React from 'react'
import styled from 'styled-components'

const StyledList = styled.li`
    margin: 10px 0;
    color: #666666;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    list-style: none;
    cursor: pointer;

    &:hover {
        color: #000000;
    }
`

const FavoritedIcon = styled.span`
    margin: 0 5px 0 0;
`

const Heart = styled.span`
    color: #e3e3e3;
`

const HeartFavorited = styled.span`
    color: red;
`

const RecipeListItem = ({ recipe, onClick, onFavorited, favorited }) => {
    return (
    <StyledList 
        onClick={() => onClick(recipe.id)}
    >
        <FavoritedIcon onClick={ e => {
            e.stopPropagation()
            onFavorited(recipe.id)}
        }
        >{favorited ? <HeartFavorited>❤</HeartFavorited> : <Heart>❤</Heart>}</FavoritedIcon>
        <span>{recipe.name}</span>
        <span>{recipe.category}</span>
    </StyledList>
)}

export default RecipeListItem