import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';
import  RouteWithSubroutes  from '../../components/RouteWithSubroutes';

export default function TeamsModule({ routes }) {
    return (
        <Suspense fallback={<h1>Loading ...</h1>}>
            <Switch>
                {routes.map(route =>
                    (<RouteWithSubroutes key={route.key} {...route} />)
                )}
                <Route component={() => <h1>Not Found!</h1>} />
            </Switch>
        </Suspense>
    )
}
