import React from 'react';
import TopMenu from "./components/Header/TopMenu";
import {Route, Switch} from "react-router";
import Contacts from "./components/Pages/Contacts/Contacts";
import Buy from "./components/Pages/Buy/Buy";
import Description from "./components/Pages/Description/Description";
import Main from "./components/Pages/Main/Main";

function App() {
    return (
        <div>
            <TopMenu/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/buy" component={Buy}/>
                <Route path="/description" component={Description}/>
                <Route path="/contacts" component={Contacts}/>
            </Switch>
        </div>
    );
}

export default App;
