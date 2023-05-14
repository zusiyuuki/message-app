import './Login.scss';

import { signInWithPopup } from 'firebase/auth';
import React from 'react';

import { Button } from '@mui/material';

import { auth, provider } from '../../firbase';

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./messageicon.png" alt="" />
      </div>
      <Button onClick={signIn}>ログインボタン</Button>
    </div>
  );
};

export default Login;
