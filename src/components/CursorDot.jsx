import { useEffect, useState } from "react";

function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("white"); // Default color
  const [scale, setScale] = useState(1); // Default size

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Get the element under the cursor
      const element = document.elementFromPoint(e.clientX, e.clientY);

      // Check background color
      if (element) {
        if (element.closest(".container-white")) {
          setColor("black"); // White background → Black dot
        } else {
          setColor("white"); // Black background → White dot
        }

        // Check if hovering over a button or link
        if (element.tagName === "BUTTON" || element.tagName === "A" || window.getComputedStyle(element).cursor === "pointer") {
          setScale(1.5); // Enlarge dot on interactive elements
        } else {
          setScale(1); // Reset size
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Force cursor to stay hidden
  useEffect(() => {
    const hideCursor = () => document.body.style.cursor = "none";
    const interval = setInterval(hideCursor, 1); // Reapply cursor: none every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="cursor-dot"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundColor: color,
        transform: `translate(-50%, -50%) scale(${scale})`, // Scale on hover
        transition: "transform 0.05s ease-out", // Smooth scaling
      }}
    />
  );
}

export default CursorDot;
