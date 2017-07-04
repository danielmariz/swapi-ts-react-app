import * as React from 'react';
import * as Pages from '../containers/pages';
import { Switch, Route, RouteProps } from 'react-router-dom';

export interface IMainRouterProps extends RouteProps {

}

export class MainRouter extends React.Component<IMainRouterProps, {}> {
     public render() {
        return (
            <Switch>
                <Route path='/' exact={true} component={Pages.People as any} />
                <Route path='/people' exact={true} component={Pages.People as any} />
                <Route path='/planets' exact={true} component={Pages.Planets as any} />
                <Route path='/vehicles' exact={true} component={Pages.Vehicles as any} />
            </Switch>
        );
     }
}

