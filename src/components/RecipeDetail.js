import React from 'react'
import classNames from 'classnames'

const RecipeDetail = (props) => {

    if(!props.recipe) {
        return (
            <p style= {props.style}>Select a recipe</p>
        )
    }

    return (
        <div style= {props.style}>
            <h2>{props.recipe.name}</h2>
            <img src={props.recipe.image} />
            <div>
                <span>{props.recipe.category}</span>
                <span>{props.recipe.calories}</span>
            </div>
            <h3>Ingredients</h3>
            <ul>
                {props.recipe.ingredients.map(ingredient => {
                    return (
                        <li key={ingredient}>
                            {ingredient}
                        </li>
                    )
                })}
            </ul>
            <h3>Steps</h3>
            <ol>
                {props.recipe.steps.map(step => {
                    return (
                        <li key={step}>
                            {step}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default RecipeDetail