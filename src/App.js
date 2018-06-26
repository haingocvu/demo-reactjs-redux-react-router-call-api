import React, { Component } from 'react';
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { map } from "lodash";
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {/* Menu */}
                            <Menu />
                        </div>
                    </div>
                    <div className="row">
                        {/* Menu Content */}
                        {this.showMenusContent(routes)}
                    </div>
                </div>
            </Router>
        );
    }

    showMenusContent(routes) {
        let rs = null;
        if (routes.length) {
            rs = map(routes, (route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                )
            })
        }
        return <Switch>{rs}</Switch>;
    }
}

export default App;
