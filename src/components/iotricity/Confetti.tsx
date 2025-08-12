"use client";

import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  velocityX: number;
  velocityY: number;
  rotationSpeed: number;
}

const Confetti = () => {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Generate confetti pieces
    const generateConfetti = () => {
      const pieces: ConfettiPiece[] = [];
      const colors = ["#FEC20C", "#FFFFFF", "#FEC20C", "#FFFFFF"]; // Using only globals.css colors

      for (let i = 0; i < 50; i++) {
        pieces.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: -10,
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4,
          velocityX: (Math.random() - 0.5) * 4,
          velocityY: Math.random() * 3 + 2,
          rotationSpeed: (Math.random() - 0.5) * 6,
        });
      }
      return pieces;
    };

    setConfettiPieces(generateConfetti());

    // Animation loop
    const animate = () => {
      setConfettiPieces((prevPieces) =>
        prevPieces
          .map((piece) => ({
            ...piece,
            x: piece.x + piece.velocityX,
            y: piece.y + piece.velocityY,
            rotation: piece.rotation + piece.rotationSpeed,
            velocityY: piece.velocityY + 0.1, // Gravity effect
          }))
          .filter((piece) => piece.y < window.innerHeight + 50)
      );
    };

    const animationId = setInterval(animate, 16); // ~60fps

    // Hide confetti after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearInterval(animationId);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible || confettiPieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? "50%" : "0%",
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
