import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebase';
import { AuthForm } from '../components/auth/AuthForm';
import { AuthBackground } from '../components/auth/AuthBackground';

export function Login() {
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/game');
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/game');
    } catch (err) {
      setError('Failed to sign in with Google.');
    }
  };

  return (
    <>
      <AuthBackground />
      <AuthForm
        isLogin={true}
        onSubmit={handleLogin}
        onGoogleSignIn={handleGoogleSignIn}
        error={error}
      />
    </>
  );
}