import './App.scss';

import React, { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from 'react-redux';

import { useAppDispatch, useAppSelector } from './app/hooks';
import Chat from './components/chat/Chat';
import Login from './components/Login/Login';
import Sidebar from './components/sidebar/Sidebar';
import { login, logout } from './features/userSlice';
import { auth } from './firbase';
import { ErrorFallback } from './utils/ErrorFallback';

function App() {
  const user = useAppSelector((state) => state.user);
  ///const user = null;
  //console.log(user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Sidebar />
          </ErrorBoundary>
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
