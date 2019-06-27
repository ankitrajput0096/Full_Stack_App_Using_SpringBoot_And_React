//This is the starting point of the application

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../component/app.component';
import About from '../AboutUs/about';
import "../css/main.css";    // importing 'main.css' file which contains all the
                             // css of the application.

export default () => {
 return (
   <BrowserRouter>
    <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/about' component={About}/>
    </Switch>
   </BrowserRouter>
 )
}