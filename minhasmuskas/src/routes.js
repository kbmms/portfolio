import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Search from './pages/Search/Search'
import MusicSingle from './pages/musicSingle/MusicSingle'
import Favorites from './pages/Favorites/Favorites'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Search} />
                <Route path="/single/:id" exact component={MusicSingle} />
                <Route path="/favoritos" exact component={Favorites} />
            </Switch>
        </BrowserRouter>
    )
}