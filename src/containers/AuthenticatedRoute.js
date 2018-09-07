import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

function AuthenticatedRoute ({ component: Component, props: cProps, ...rest}) {
    return (
        <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
    );
}

export { AuthenticatedRoute }