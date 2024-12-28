import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

export function AuthBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snake: Point[] = [
      { x: canvas.width / 2, y: canvas.height / 2 },
      { x: canvas.width / 2 - 10, y: canvas.height / 2 },
      { x: canvas.width / 2 - 20, y: canvas.height / 2 },
    ];

    let dx = 10;
    let dy = 0;

    function drawSnake() {
      ctx.fillStyle = '#4ade80';
      snake.forEach((segment) => {
        ctx.fillRect(segment.x, segment.y, 8, 8);
      });
    }

    function moveSnake() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };

      if (head.x < 0) head.x = canvas.width;
      if (head.x > canvas.width) head.x = 0;
      if (head.y < 0) head.y = canvas.height;
      if (head.y > canvas.height) head.y = 0;

      snake.unshift(head);
      snake.pop();
    }

    function animate() {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      moveSnake();
      drawSnake();

      if (Math.random() < 0.02) {
        const directions = [
          { dx: 10, dy: 0 },
          { dx: -10, dy: 0 },
          { dx: 0, dy: 10 },
          { dx: 0, dy: -10 },
        ];
        const newDir = directions[Math.floor(Math.random() * directions.length)];
        dx = newDir.dx;
        dy = newDir.dy;
      }
    }

    const intervalId = setInterval(animate, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
    />
  );
}