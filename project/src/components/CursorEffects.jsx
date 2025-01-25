import React, { useState, useEffect, useRef } from "react";

const CursorEffects = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Smoothly update the circle and dot positions
  const updatePositions = () => {
    setCirclePosition((prev) => ({
      x: prev.x + (cursorPosition.x - prev.x) * 0.1,
      y: prev.y + (cursorPosition.y - prev.y) * 0.1,
    }));

    setDotPosition((prev) => ({
      x: prev.x + (circlePosition.x - prev.x) * 0.1,
      y: prev.y + (circlePosition.y - prev.y) * 0.1,
    }));

    animationFrameRef.current = requestAnimationFrame(updatePositions);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(updatePositions);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [cursorPosition, circlePosition]); // Re-run effect when dependencies change

  return (
    <>
      {/* Circle */}
      <div
        className="circle fixed w-10 h-10 border-2 border-teal-600 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${circlePosition.x}px`,
          top: `${circlePosition.y}px`,
          zIndex: 50,
        }}
      ></div>

      {/* Dot */}
      <div
        className="dot fixed w-2 h-2 bg-teal-500 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${dotPosition.x}px`,
          top: `${dotPosition.y}px`,
          zIndex: 50,
        }}
      ></div>
    </>
  );
};

export default CursorEffects;
