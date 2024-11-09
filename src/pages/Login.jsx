import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="flex items-center justify-center h-screen">
      {!isAuthenticated ? (
        <div>
          <h4 className="text-3xl font-semibold my-4">Good to see you !!</h4>
          <button
            onClick={() => loginWithRedirect()}
            className="py-2 px-6 bg-black text-white rounded-3xl font-semibold"
          >
            Log in with Auth0
          </button>
        </div>
      ) : (
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default Login;
