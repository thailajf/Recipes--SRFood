import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Pages/Home';
import RecipesPage from './Pages/Recipes';

export default function Router(){
    return(
        <Switch>
            <Route  path="/" exact component={Home} />
            <Route path="/listRecipes" component={RecipesPage} />
        </Switch>
    )
}
