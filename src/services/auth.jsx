import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

const AuthProvider = ({ children }) => (
  <Auth0Provider
    domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri:
        import.meta.env.VITE_APP_AUTH0_REDIRECT_URI || window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    {children}
  </Auth0Provider>
);

export default AuthProvider;
