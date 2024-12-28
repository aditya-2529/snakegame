import React, { useEffect, useRef } from 'react';

interface GameBoardProps {
  snake: { x: number; y: number }[];
  food: { x: number; y: number };
  gameOver: boolean;
}

export function GameBoard({ snake, food, gameOver }: GameBoardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const GRID_SIZE = 20;
  const CELL_SIZE = 25;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snake with circular segments and gradient
    snake.forEach(({ x, y }, index) => {
      const radius = CELL_SIZE / 2 - 1;
      const centerX = x * CELL_SIZE + CELL_SIZE / 2;
      const centerY = y * CELL_SIZE + CELL_SIZE / 2;

      // Create gradient for snake segments
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      );

      if (index === 0) {
        // Head with different color
        gradient.addColorStop(0, '#6ee7b7');
        gradient.addColorStop(1, '#059669');
      } else {
        // Body segments
        gradient.addColorStop(0, '#4ade80');
        gradient.addColorStop(1, '#16a34a');
      }

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = '#064e3b';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Draw food with glow effect
    const foodCenterX = food.x * CELL_SIZE + CELL_SIZE / 2;
    const foodCenterY = food.y * CELL_SIZE + CELL_SIZE / 2;
    const foodRadius = CELL_SIZE / 2 - 2;

    // Add glow effect
    ctx.shadowColor = '#ef4444';
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(foodCenterX, foodCenterY, foodRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#ef4444';
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw grid
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= GRID_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, GRID_SIZE * CELL_SIZE);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(GRID_SIZE * CELL_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }
  }, [snake, food]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={GRID_SIZE * CELL_SIZE}
        height={GRID_SIZE * CELL_SIZE}
        className="border-2 border-gray-700 rounded-lg shadow-lg"
      />
      {gameOver && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
          <div className="text-white text-2xl font-bold">Game Over!</div>
        </div>
      )}
    </div>
  );
}