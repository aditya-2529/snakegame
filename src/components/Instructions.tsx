import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

export function Instructions() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-xl font-bold mb-4">How to Play</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold mb-2">Controls</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <ArrowUp className="w-5 h-5" />
              <span>Move Up</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowDown className="w-5 h-5" />
              <span>Move Down</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Move Left</span>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowRight className="w-5 h-5" />
              <span>Move Right</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Rules</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Eat food to grow longer</li>
            <li>Avoid hitting walls</li>
            <li>Don't collide with yourself</li>
            <li>Score points for each food eaten</li>
          </ul>
        </div>
      </div>
    </div>
  );
}