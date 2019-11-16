import React from 'react'
import ReactDOM from 'react-dom'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import Map from './components/Map.js'
import App from './components/App.js'
import Profile from './components/Profile.js'
import Notfound from './components/Notfound.js'
import Login from './components/Login.js'



const routing = (
    <Router>
        <div className="row">
            <div className="col-2 text-center pr-0">
                <img src={require("./assets/icon_medium.png")} alt="Logo" id="profile-pic" />
                <img src={require("./assets/logo.svg")} alt="Logo" />

                <ul className="nav flex-column nav-pills mt-2">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact activeClassName="active" to="/">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/map">Map</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/profile">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/login">Log In</NavLink>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/profile" component={Profile} />
                <Route path="/map" component={Map} />
                <Route path="/login" component={Login} />
                <Route component={Notfound} />
            </Switch>

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));