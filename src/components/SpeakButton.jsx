import { useState, useCallback, useRef } from 'react';

// Cache audio elements to avoid re-fetching the same text
const audioCache = new Map();

// Use Google Translate TTS - sounds much more natural/human for Japanese
function speakWithGoogleTTS(text) {
  return new Promise((resolve, reject) => {
    const encoded = encodeURIComponent(text);
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=${encoded}`;

    // Check cache first
    if (audioCache.has(text)) {
      const cached = audioCache.get(text);
      cached.currentTime = 0;
      cached.onended = resolve;
      cached.onerror = reject;
      cached.play().catch(reject);
      return;
    }

    const audio = new Audio(url);
    audio.onended = resolve;
    audio.onerror = reject;
    audio.play()
      .then(() => {
        // Cache on successful play
        audioCache.set(text, audio);
        // Keep cache from growing too large
        if (audioCache.size > 100) {
          const first = audioCache.keys().next().value;
          audioCache.delete(first);
        }
      })
      .catch(reject);
  });
}

// Fallback: Web Speech API with best available Japanese voice
function speakWithWebSpeech(text) {
  return new Promise((resolve, reject) => {
    if (!window.speechSynthesis) {
      reject(new Error('No speech synthesis'));
      return;
    }
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.9;
    utterance.pitch = 1.05;

    // Pick the best Japanese voice available
    const voices = window.speechSynthesis.getVoices();
    const jpVoices = voices.filter(v => v.lang.startsWith('ja'));

    if (jpVoices.length > 0) {
      // Prefer Google or Microsoft neural voices (they sound most natural)
      const preferred = jpVoices.find(v =>
        /google/i.test(v.name) ||
        /nanami/i.test(v.name) ||
        /keita/i.test(v.name) ||
        /neural/i.test(v.name) ||
        /natural/i.test(v.name) ||
        /premium/i.test(v.name)
      );
      utterance.voice = preferred || jpVoices[0];
    }

    utterance.onend = resolve;
    utterance.onerror = reject;
    window.speechSynthesis.speak(utterance);
  });
}

// Main speak function: tries Google TTS first, falls back to Web Speech API
async function speak(text) {
  if (!text) return;
  try {
    await speakWithGoogleTTS(text);
  } catch {
    try {
      await speakWithWebSpeech(text);
    } catch {
      // Silent fail - no TTS available
    }
  }
}

export default function SpeakButton({ text, label, size = 'small' }) {
  const [playing, setPlaying] = useState(false);
  const abortRef = useRef(false);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    if (!text || playing) return;

    abortRef.current = false;
    setPlaying(true);

    speak(text).finally(() => {
      if (!abortRef.current) {
        setPlaying(false);
      }
    });

    // Safety timeout
    setTimeout(() => {
      abortRef.current = true;
      setPlaying(false);
    }, 10000);
  }, [text, playing]);

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
