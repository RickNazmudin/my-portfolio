// TerminalOpening.jsx
"use client";

import { useEffect, useState } from "react";

const commands = [
  "┌──(kali㉿kali)-[~]",
  "└─$ initializing environment...",
  " loading developer profile -name Ricko Najmudin...",
  " modules: [Web Apps, Mobile Apps, Enterprise Systems]...",
  " system ready!",
  " starting portfolio...",
];

function TerminalOpening() {
  const [terminalText, setTerminalText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showTerminal, setShowTerminal] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const [showLoading, setShowLoading] = useState(false);

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
      }
    };

    const typingInterval = setInterval(typeText, 35);
    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (!isTyping) {
      setShowLoading(true);
      const timerFade = setTimeout(() => {
        setOpacity(0);
      }, 1200);

      const timerHide = setTimeout(() => {
        setShowTerminal(false);
      }, 2000);

      return () => {
        clearTimeout(timerFade);
        clearTimeout(timerHide);
      };
    }
  }, [isTyping]);

  const handleSkip = () => {
    setOpacity(0);
    setTimeout(() => {
      setShowTerminal(false);
    }, 300);
  };

  if (!showTerminal) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0d1224]/95 backdrop-blur-md flex items-center justify-center font-mono p-4"
      style={{
        transition: "opacity 0.7s ease-out",
        opacity: opacity,
      }}
    >
      <div className="terminal-container max-w-xl w-full rounded-xl border border-[#2e375e] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="terminal-header flex items-center justify-between px-4 py-2.5 bg-[#1b223c] border-b border-[#2e375e]">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            <span className="text-xs text-gray-300 font-medium ml-2">ricko@terminal:~</span>
          </div>

          <button
            onClick={handleSkip}
            className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#252f5e] hover:bg-[#354388] text-gray-200 transition-colors cursor-pointer"
          >
            Skip [Esc] ⏭
          </button>
        </div>

        <div className="terminal-content p-4 sm:p-6 bg-[#0a0e1f] text-emerald-400 text-xs sm:text-sm font-mono min-h-[160px] flex flex-col justify-between">
          <pre className="whitespace-pre-wrap leading-relaxed">
            {terminalText}
            {isTyping && <span className="animate-blink font-bold">█</span>}
          </pre>

          {showLoading && !isTyping && (
            <div className="loading-container mt-3 flex items-center gap-3">
              <div className="loading-spinner w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-emerald-300 text-xs">Launching Portfolio Workspace...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TerminalOpening;
