import React, { useEffect, useState } from 'react';

export default function KineticTextReveal({ text, highlightText, tag, className = '' }) {
  const [revealedChars, setRevealedChars] = useState(0);
  const fullText = text + ' ' + (highlightText || '');

  useEffect(() => {
    const total = fullText.length;
    let current = 0;

    const interval = setInterval(() => {
      current += 2;
      setRevealedChars(current);
      if (current >= total) {
        clearInterval(interval);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className={`kinetic-text-wrapper ${className}`}>
      {tag && (
        <div className="font-mono text-[11px] text-cyan tracking-[.22em] mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-cyan rounded-[1px] inline-block" />
          <span>{tag}</span>
        </div>
      )}

      <h1 className="font-display font-light text-off text-[clamp(2.5rem,7vw,6.5rem)] leading-[1.03] tracking-[-0.03em]">
        <span>{text} </span>
        {highlightText && (
          <span className="italic text-cyan underline decoration-cyan/30 underline-offset-8">
            {highlightText}
          </span>
        )}
      </h1>
    </div>
  );
}
