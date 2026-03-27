import React from 'react';

interface FlagEmojiProps {
  flag: string; // Unicode flag emoji like 🇹🇳
  size?: number;
  className?: string;
}

/**
 * Converts a Unicode flag emoji to its ISO 3166-1-alpha-2 country code,
 * then renders it as an image from flagcdn.com to ensure cross-platform support.
 * Windows doesn't render regional indicator emoji as flags natively.
 */
const FlagEmoji: React.FC<FlagEmojiProps> = ({ flag, size = 20, className }) => {
  // Extract country code from flag emoji
  // Flag emojis are made of two regional indicator symbols (U+1F1E6..U+1F1FF)
  const codePoints = [...flag].map(c => c.codePointAt(0) || 0);
  
  // Regional indicators start at 0x1F1E6 (🇦) for 'A'
  const countryCode = codePoints
    .filter(cp => cp >= 0x1F1E6 && cp <= 0x1F1FF)
    .map(cp => String.fromCharCode(cp - 0x1F1E6 + 65))
    .join('')
    .toLowerCase();

  if (!countryCode || countryCode.length !== 2) {
    // Fallback: just render the emoji text
    return <span className={className}>{flag}</span>;
  }

  return (
    <img 
      src={`https://flagcdn.com/w${size * 2}/${countryCode}.png`}
      alt={flag}
      width={size}
      height={Math.round(size * 0.75)}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
      loading="lazy"
    />
  );
};

export default FlagEmoji;
