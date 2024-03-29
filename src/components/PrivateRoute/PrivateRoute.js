import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import LanguageContext from '../../contexts/LanguageContext'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
          {userContext =>
            !!userContext.user.id ? (
              <LanguageContext.Consumer>
                {langContext => (
                  <Component {...componentProps} {...langContext} />
                )}
              </LanguageContext.Consumer>
            ) : (
              <Redirect
                to={{
                  pathname: userContext.user.idle ? '/login' : '/register',
                  state: { from: componentProps.location },
                }}
              />
            )
          }
        </UserContext.Consumer>
      )}
    />
  )
}
