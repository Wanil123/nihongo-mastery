import { useState, useCallback } from 'react';

function speak(text, lang = 'ja-JP') {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.85;
  utterance.pitch = 1;
  // Try to find a Japanese voice
  const voices = window.speechSynthesis.getVoices();
  const jpVoice = voices.find(v => v.lang.startsWith('ja'));
  if (jpVoice) utterance.voice = jpVoice;
  window.speechSynthesis.speak(utterance);
  return utterance;
}

export default function SpeakButton({ text, label, size = 'small' }) {
  const [playing, setPlaying] = useState(false);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    if (!text) return;
    setPlaying(true);
    const utterance = speak(text);
    if (utterance) {
      utterance.onend = () => setPlaying(false);
      utterance.onerror = () => setPlaying(false);
      // Fallback timeout
      setTimeout(() => setPlaying(false), 5000);
    } else {
      setPlaying(false);
    }
  }, [text]);

  if (!text) return null;

  const isSmall = size === 'small';

  return (
    <button
      className="speak-btn"
      onClick={handleClick}
      title={`Listen: ${text}`}
      style={{
        background: 'none',
        border: playing ? '1px solid #dc2626' : '1px solid #e2e8f0',
        borderRadius: '6px',
        cursor: 'pointer',
        padding: isSmall ? '2px 8px' : '4px 12px',
        fontSize: isSmall ? '0.75rem' : '0.85rem',
        color: playing ? '#dc2626' : '#64748b',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        transition: 'all 0.15s ease',
        verticalAlign: 'middle',
        marginLeft: isSmall ? '6px' : '0',
        flexShrink: 0,
      }}
    >
      {playing ? '🔊' : '🔈'}{label && ` ${label}`}
    </button>
  );
}

export { speak };
