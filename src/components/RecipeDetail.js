import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Paragraph = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const SectionTitle = styled.h2`
    font-size: 26px;
`

const DetailTitle = styled.h3`
    margin: 10px 0;
    font-size: 22px;
`

const StyledImg = styled.img`
    width: 100%;
`

const Button = styled(Link)`
    display: block;
    max-width: 150px;
    margin: 15px auto;
    padding: 10px 15px;
    color: #ffffff;
    background-color: #009eb7;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
`

const RecipeDetail = (props) => {

    if(!props.recipe) {
        return (
            <Paragraph >Select a recipe</Paragraph>
        )
    }

    return (
        <div>
            <SectionTitle>{props.recipe.name}</SectionTitle>
            <StyledImg src={props.recipe.image} />

            <DetailTitle>Category</DetailTitle>
            <p>{props.recipe.category}</p>

            <DetailTitle>Calories</DetailTitle>
            <p>{props.recipe.calories}</p>

            <DetailTitle>Ingredients</DetailTitle>
            {props.recipe.ingredients && 
                <ul>
                    {props.recipe.ingredients.map(ingredient => {
                        return (
                            <li key={ingredient}>
                                {ingredient}
                            </li>
                        )
                    })}
                </ul>
            }
            <DetailTitle>Steps</DetailTitle>
            {props.recipe.steps && 
                <ol>
                    {props.recipe.steps.map(step => {
                        return (
                            <li key={step}>
                                {step}
                            </li>
                        )
                    })}
                </ol>
            }
            {
                props.backButton ? <Button to="/">Back to Home</Button> : <Button to={`/recipe/${props.recipe.id}`}>See More</Button>
            }
            
        </div>
    )
}

export default RecipeDetail