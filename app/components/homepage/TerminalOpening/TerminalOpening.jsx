// TerminalOpening.jsx
"use client";

import { useEffect, useState } from "react";

function TerminalOpening() {
  const [terminalText, setTerminalText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showTerminal, setShowTerminal] = useState(true);

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

        // Jika masih ada karakter yang bisa ditambahkan
        if (currentCharIndex < currentCommand.length) {
          setTerminalText((prev) => prev + currentCommand[currentCharIndex]);
          currentCharIndex++;
        } else {
          // Jika sudah selesai mengetik perintah, tambahkan newline dan reset indeks
          setTerminalText((prev) => prev + "\n");
          currentCommandIndex++;
          currentCharIndex = 0;
        }
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        // Fade out terminal setelah selesai
        setTimeout(() => {
          setShowTerminal(false);
        }, 1000);
      }
    };

    const typingInterval = setInterval(typeText, 50);

    return () => clearInterval(typingInterval);
  }, []);

  if (!showTerminal) {
    return null;
  }

  return (
    <div className="bg-kali h-screen flex items-center justify-center font-mono">
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
        </div>
      </div>
    </div>
  );
}

export default TerminalOpening;
