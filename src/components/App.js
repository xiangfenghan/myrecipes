import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Favorites from './Favorites'
import Recipe from './Recipe'
import NotFound from './NotFound'
import styled from 'styled-components'

const Main = styled.main`
    padding: 0 5%;
`

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            recipes: [],
            favorites: []
        }
    }

    componentDidMount() {
        fetch(`${API_URL}/v1/recipes`)
          .then(res => res.json())
          .then((recipes) => {
            this.setState({
              recipes: recipes
            })
        })
      }

      toggleFavorite = id => {
        this.setState(({ favorites, ...state }) => {
          const index  = favorites.indexOf(id)
          if(index !== -1) {
            return { ...state, favorites: favorites.filter(f => {
                return f !== id
              }
            )}
          }
          return { ...state, favorites: [...favorites, id] }
        })
      }

    render () {
        return (
            <BrowserRouter>
                <Main>
                    <Header />
                    <Switch>
                        <Redirect from="/home" to="/" />
                        <Route
                            exact 
                            path="/" 
                            render={() => (
                                <Home state={this.state} toggleFavorite={this.toggleFavorite} />
                            )} />
                        <Route
                            path="/favorites"
                            render={() => (
                                <Favorites state={this.state}  toggleFavorite={this.toggleFavorite} />
                            )}
                        />
                        <Route 
                            path="/recipe/:id"
                            component={Recipe}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Main>
            </BrowserRouter>
        )
    }
}

export default App