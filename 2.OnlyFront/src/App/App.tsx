import * as React from 'react';
import { 
    HashRouter as Router, 
    Switch,
    Route
} from "react-router-dom";
import Navigation  from "../Navigation/Navigation";

import './styles.css';
import News from "../News/News";
import Weather from "../Weather/Weather";
import Currency from "../Currency/Currency";
import Autonews from "../Autonews/Autonews";

function App() {
    return (
        <Router>
            <div className="appContainer">
                <Navigation/>
                {renderPages()}
            </div>
        </Router>
    )
}

function renderPages() {
    return (
        <Switch>
            <Route path='/news'><News/></Route>
            <Route path='/weather'><Weather/></Route>
            <Route path='/currency'><Currency/></Route>
            <Route path='/autonews'><Autonews/></Route>
            <Route exact path='/'><p style={{margin: '20px'}}>Добро пожаловать</p></Route>
        </Switch>
    )
}

export default App;
