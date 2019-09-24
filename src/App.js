import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import Animation from "./Animation";
import Slick from "./Slick";
import FirstVersion from "./firstVersion";
import {Switch, Route} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
            <div>
                <Switch>
                    <Route exact path='/' component={Main}></Route>
                    <Route exact path='/version3' component={Slick}></Route>
                    <Route exact path='/version2' component={Animation}></Route>
                    <Route exact path='/version1' component={FirstVersion}></Route>
                </Switch>
            </div>
            </div>
        )
    }

}

export default App;
