import React from 'react';
import { Trophy, Settings, Home, LogOut } from 'lucide-react';

export function Navbar({ score, highScore, onSignOut }: { score: number; highScore: number; onSignOut: () => void }) {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Home className="w-6 h-6" />
          <span className="text-xl font-bold">Snake Game</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5" />
            <span>High Score: {highScore}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Current Score: {score}</span>
          </div>
          <div style={{'cursor': 'pointer'}} className="flex items-center space-x-2" onClick={onSignOut}>
            <LogOut className="w-5 h-5" />
            <span>LogOut</span>
          </div>
        </div>
      </div>
    </nav>
  );
}