import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ROUTES from "../shared/constants/routes";
import Default from '../components/Default';
import FindMyDog from '../components/FindMyDog';
import Campaign from '../components/Campaign';
class RouteComponent extends Component {
    /**
     * @description  This is the basic route defining component
     */
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={ROUTES.FIND_MY_DOG} component={FindMyDog} />
                    <Route exact path={ROUTES.CAMPAIGN_PERFORMANCE} component={Campaign} />
                    <Route exact path={ROUTES.DEFAULT} render={props => <Default {...props} />} />
                </Switch>
            </Router>
        );
    }
}


export default RouteComponent;