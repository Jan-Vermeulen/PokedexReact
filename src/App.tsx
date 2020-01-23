import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'

const App: React.FC = (props: any) => {
    return (
        <div style={{ fontFamily: 'impact' }}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <PokemonList />
                    </Route>
                    <Route path={'/pokemon/:id'}>
                        <PokemonDetails />
                    </Route>
                    <Route>
                        <>Not Found...</>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
