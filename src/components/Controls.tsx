import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
}

export function Controls({ isPlaying, onTogglePlay, onReset }: ControlsProps) {
  return (
    <div className="flex justify-center space-x-4 mt-6">
      <button
        onClick={onTogglePlay}
        className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        {isPlaying ? (
          <>
            <Pause className="w-5 h-5" />
            <span>Pause</span>
          </>
        ) : (
          <>
            <Play className="w-5 h-5" />
            <span>Play</span>
          </>
        )}
      </button>
      <button
        onClick={onReset}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        <RotateCcw className="w-5 h-5" />
        <span>Reset</span>
      </button>
    </div>
  );
}