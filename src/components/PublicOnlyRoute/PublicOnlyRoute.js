import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import LanguageContext from '../../contexts/LanguageContext'

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <UserContext.Consumer>
          {userContext =>
            !!userContext.user.id
              ? <Redirect to={'/'} />
              : (
                <LanguageContext.Consumer>
                  {langContext => (
                    <Component {...componentProps} {...langContext} />
                  )}
                </LanguageContext.Consumer>
              )
          }
        </UserContext.Consumer>
      )}
    />
  )
}
