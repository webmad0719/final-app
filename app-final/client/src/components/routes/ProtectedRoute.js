import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const protectedRoute = ({ component: Component, user, redirectPath, ...rest }) => {

    return (
        <Route {...rest} render={props => {
            if (user) {
                return <Component {...props} loggedInUser={user} />
            } else {
                return <Redirect to={{ pathname: redirectPath }} />
            }
        }
        }
        />
    )
}
export default protectedRoute;