import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import Game from './components/Game';
import { useAuthState } from './hooks/useAuthState';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuthState();
  
  if (loading) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/game" element={
          <PrivateRoute>
            <Game />
          </PrivateRoute>
        } />
        <Route path="/" element={<Navigate to="/game" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;