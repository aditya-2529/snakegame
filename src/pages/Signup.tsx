import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../config/firebase';
import { AuthForm } from '../components/auth/AuthForm';
import { AuthBackground } from '../components/auth/AuthBackground';

export function Signup() {
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const handleSignup = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/game');
    } catch (err) {
      setError('Failed to create account. Email might be already in use.');
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
        isLogin={false}
        onSubmit={handleSignup}
        onGoogleSignIn={handleGoogleSignIn}
        error={error}
      />
    </>
  );
}