// TerminalOpening.jsx
"use client";

import { useEffect, useState } from "react";

function TerminalOpening() {
  const [terminalText, setTerminalText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showTerminal, setShowTerminal] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [showLoading, setShowLoading] = useState(false); // State baru untuk loading

  const commands = [
    "┌──(kali㉿kali)-[~]",
    "└─$ loading system...",
    " initializing components...",
    " setting up environment...",
    " load profile -firstName Ricko -lastName Najmudin...",
    " system ready!",
    " starting portfolio application...",
  ];

  useEffect(() => {
    let currentCommandIndex = 0;
    let currentCharIndex = 0;

    const typeText = () => {
      if (currentCommandIndex < commands.length) {
        const currentCommand = commands[currentCommandIndex];

        if (currentCharIndex < currentCommand.length) {
          setTerminalText((prev) => prev + currentCommand[currentCharIndex]);
          currentCharIndex++;
        } else {
          setTerminalText((prev) => prev + "\n");
          currentCommandIndex++;
          currentCharIndex = 0;
        }
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    };

    const typingInterval = setInterval(typeText, 50);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (!isTyping) {
      // Tampilkan loading setelah typing selesai
      setShowLoading(true);

      // Mulai fade out terminal setelah 2 detik
      setTimeout(() => {
        setOpacity(0);
      }, 2000);

      // Sembunyikan terminal setelah fade out selesai
      setTimeout(() => {
        setShowTerminal(false);
      }, 3000);
    }
  }, [isTyping]);

  if (!showTerminal) {
    return null;
  }

  return (
    <div
      className="bg-kali h-screen flex items-center justify-center font-mono"
      style={{
        transition: "opacity 1s ease-out",
        opacity: opacity,
      }}
    >
      <div className="terminal-container">
        <div className="terminal-header">
          <div className="circle red"></div>
          <div className="circle yellow"></div>
          <div className="circle green"></div>
          <span className="text-sm text-gray-300">Terminal</span>
        </div>
        <div className="terminal-content">
          <pre>
            {terminalText}
            {isTyping && <span className="animate-blink">█</span>}
          </pre>
          {showLoading && !isTyping && (
            <div className="loading-container mt-4">
              <div className="loading-spinner"></div>
              <p className="text-green-500 mt-2">Loading Portfolio...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TerminalOpening;
